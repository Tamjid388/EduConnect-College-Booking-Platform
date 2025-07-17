require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials:true
}));



app.use(express.json());
app.use(cookieParser());
// MongoDB Connection URL
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.MONGODB_PASS}@cluster0.zovp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("educonnect_db");
    const collection = db.collection("users");
    const collegeCollection=db.collection("colleges")
    const applicationCollection = db.collection("myapplication");
    const reviewCollection=db.collection('reviewCollection')
    // User Registration
    app.post("/api/v1/register", async (req, res) => {
      const { username, email, password } = req.body;

      // Check if email already exists
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exist!!!",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into the database
      await collection.insertOne({
        username,
        email,
        password: hashedPassword,
        role: "user",
      });

      res.status(201).json({
        success: true,
        message: "User registered successfully!",
      });
    });

    // User Login
    app.post("/api/v1/login", async (req, res) => {
      const { email, password } = req.body;

      // Find user by email
      const user = await collection.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.EXPIRES_IN,
        }
      );

        //  Set the token in an HTTP-only cookie
res.cookie("accessToken", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000, 
});

      res.json({
        success: true,
        message: "User successfully logged in!",
        
      });
    });

// Current User



app.get("/api/v1/me", (req, res) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Send back the user info you want (email, role, etc)
    res.json({
      user: {
        email: decoded.email,
        role: decoded.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

// Signout
// User Signout
app.post("/api/v1/signout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.json({
    success: true,
    message: "User signed out successfully",
  });
});







//  Next auth Providers

app.post("/api/v1/social-login", async (req, res) => {
  const { email, name } = req.body;
console.log(email,name);
  const user = await collection.findOne({ email });

  // Create user if not exists (optional)
  if (!user) {
    await collection.insertOne({ username: name, email, role: "user" });
  }

  const token = jwt.sign({ email, role: "user" },
     process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ success: true });
});
// ..........................
app.post("/api/v1/users", async (req, res) => {
  const { name, email, image, provider } = req.body;

  try {
  

   const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exist!!!",
        });
      }
  
          // Insert user into the database
      await collection.insertOne({
        username:name,
        email,
        image,
      
        role: "user",
      });

      res.status(201).json({
        success: true,
        message: "User registered successfully!",
      });

  
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Get User By email

app.get("/api/v1/users/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.patch("/api/v1/users/:email", async (req, res) => {
  const email = req.params.email;
  const updateData = req.body;

  try {
    const result = await collection.updateOne(
      { email }, // filter by email
      { $set: updateData } // fields to update
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});









// GET all colleges
app.get("/api/v1/colleges", async (req, res) => {
  try {
    const colleges = await collegeCollection.find().toArray();
    res.status(200).json({ success: true, data: colleges });
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ success: false, message: "Failed to fetch colleges" });
  }
});
// Applications
app.post('/api/v1/applications',async(req,res)=>{
try {
  const body=req.body
  const { collegeId } = body;
const college=await collegeCollection.findOne(
  {_id:new ObjectId(collegeId)})

  if (!college) {
      return res.status(404).json({
        success: false,
        message: 'College not found with this ID',
      });
    }
  const applicationData={
    ...body,
    collegeName:college.name,
    collegeLocation:college.location,
    students:college.students,
    collegeImage:college.image,
    papers:college.researchCount
  }
const applications=await applicationCollection.insertOne(applicationData)

  res.status(200).json({
      success: true,
      data: body,
    });
} catch (error) {
  res.status(500).json(
    {
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    }
  )
}
})

// get all application
app.get('/api/v1/applications',async(req,res)=>{
 try {
   const allApplications=await applicationCollection.find().toArray()
   res.status(200).json({
     success: true,
      data: allApplications,
   })
 } catch (error) {
    res.status(500).json(
    {
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    }
  )
 }

})

// Get applications by email
app.get('/api/v1/myapplications/:email',async(req,res)=>{
 try {
  const email=req.params.email;
 
 
   const allApplications=await applicationCollection.find({email}).toArray()
   res.status(200).json({
     success: true,
      data: allApplications,
  
  
    })
 } catch (error) {
    res.status(500).json(
    {
      success: false,
      message: 'Failed to fetch applications',
      error: error.message,
    }
  )
 }

})
// Add Review

app.post('/api/v1/addreview', async (req, res) => {
  try {
    const reviewData = req.body;

    
    const result = await reviewCollection.insertOne({
      ...reviewData,
      date: new Date() 
    });

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: result,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});

app.get('/api/v1/reviews', async (req, res) => {
  try {
    const reviews = await reviewCollection.find().toArray();

    res.status(200).json({
      success: true,
      data: reviews,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});














    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } finally {
  }
}

run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Server is running smoothly",
    timestamp: new Date(),
  };
  res.json(serverStatus);
});

