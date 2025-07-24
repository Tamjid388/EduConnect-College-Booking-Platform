import  { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { Erica_One } from "next/font/google";
export const authOptions:NextAuthOptions = {

  providers: [
 CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
     
      password: { label: "Password", type: "password" },
      email: { label: "Email", type: "email" }
    },
    async authorize(credentials, req) {
     console.log(credentials);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()
      console.log("Login response user:", user);
      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })



    ,
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
       const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/social-login`, {
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
    },
    

    async jwt({token,user,account,profile}){
      if(user){
         
        token.email = user.email;
        
        token.name = (user as any).username;
      }
      return token;
    },
    async session({ session, token }) {
    if (token && session.user) {
      
      session.user.email = token.email;
      
      session.user.name = token.name;
    }
    return session;
  }
    


    
  },

  pages: {
    signIn: "/login",
   
  },
  secret:process.env.NEXTAUTH_SECRET



}
