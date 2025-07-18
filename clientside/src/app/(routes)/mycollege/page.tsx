"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import CustomLoader from "@/components/Loader/CustomLoader";
import { Star } from "lucide-react";
import AddReview from "@/components/Review/AddReview";
export default function mycollege() {
      const [applications, setApplications] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/myapplications/tamjidahmed388@gmail.com`
        );
        setApplications(res.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);
  const myApplications=applications?.data

   if (loading) return <CustomLoader/>

  if (myApplications.length === 0) return <p className="text-red-500 my-16 text-4xl">No applications found.</p>;
 
  return (
    <div className='max-w-6xl mx-auto'>
        <h1 className="text-2xl font-bold mb-4">My Applications</h1>
     
   
      <ul className="space-y-4">
        {myApplications.map((app:any, index:string) => (
         <div  key={index} className="flex border flex-row">
             {/* <div className="w-4/12">
            Lorem ipsum dolor sit.
          </div> */}
             <div
           
            className="border rounded p-4 w-12/12
             shadow-sm hover:shadow-md transition"
          >
            <p>
              <span className="font-semibold opacity-80">Candidate Name:</span>
              {app.candidateName}
            </p>
            <p>
              <span  className="font-semibold opacity-80">Subject/Major:</span> {app.subjectMajor}
            </p>
            <p>
              <span  className="font-semibold opacity-80">Email:</span>  {app.email}
            </p>
            <p>
              <span  className="font-semibold opacity-80">Phone Number:</span> {app.phoneNumber}
            </p>
            <p>
              <strong  className="font-semibold opacity-80">Address:</strong> {app.address}
            </p>
            <p>
              <strong  className="font-semibold opacity-80">Date of Birth:</strong> {app.dateOfBirth}
            </p>
        
             <AddReview app={app}/>   
          
          </div>
          
         
         </div>
         
         
        ))}
      </ul>
        
     </div>
  )
}
