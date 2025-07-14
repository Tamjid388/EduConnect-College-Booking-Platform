import  { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { Erica_One } from "next/font/google";
export const authOptions:NextAuthOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_Client_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string
  })
    // ...add more providers here
  ],
  callbacks:{
     
    async signIn({ user }){
      try {
       const res= await fetch("http://localhost:5000/api/v1/social-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            image: user.image,
          
          }),
          credentials:"include"
        });

        const data=await res.json()
       if (res.ok && data?.success) {
      return true; 
    }
    return false;
      } catch (error) {
            console.error("Error saving user to DB:", error);
        return false;
      }
    }
  },

  pages: {
    signIn: "/login",
   
  },
  secret:process.env.NEXTAUTH_SECRET


//      providers:[
//           CredentialsProvider({
//                   id:"credentials",
//                    name: 'Credentials',
//                     credentials: {
//         email: { label: "Email", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },

//       async authorize(credentials:any):Promise<any>{
// const res = await fetch("/your/endpoint", {
//         method: 'POST',
//         body: JSON.stringify({
//       email: credentials.email, 
//       password: credentials.password,
//     }),
//         headers: { "Content-Type": "application/json" }
//       })
//       const user = await res.json()
      
//     if(!user){
//       throw new Error("No User found")
//     }
    
//     if(!user.isVerified){
//       throw new Error("Please Verify YOur account")
//     }
    
    
    
//     }
//           })
//       ]
}
