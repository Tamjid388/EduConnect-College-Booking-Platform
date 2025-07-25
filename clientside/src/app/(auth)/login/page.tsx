/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export type LoginData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
   
  } = useForm<LoginData>();


const router=useRouter()
  const onSubmit = async (data: LoginData) => {
    console.log(data.email,data.password);
    const res=await signIn("credentials",{
      redirect:false,
      email:data.email,
      password:data.password,
      callbackUrl:"/"
    })

     if (res?.ok) {
    router.push(res.url || "/");
  } else {
    console.error("Login failed");
    
  }
  };

  return (
    <div className="my-10 mx-2">
     
      <div className="grid max-w-md mx-auto items-center border rounded-2xl py-12">
         <h1 className="text-center text-4xl font-bold mb-2">
        Welcome Back 
      </h1>
         <h1 className="text-center text-xl font-light mb-5 px-2 md:px-0">
       Sign in to your Educonnect account
      </h1>
        <div className="w-full mx-auto bg-white
         p-6  rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full border bg-orange-500 to-25%
                text-white
                font-semibold py-2 px-4 rounded-md shadow-md
                 hover:bg-orange-700 hover:text-white"
              >
                Login
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link className="text-orange-600 hover:underline" href="/register">
                Register
              </Link>
            </p>
          <div className="flex items-center gap-4 my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <p className="text-gray-500 text-sm">Or Continue With</p>
  <div className="flex-grow h-px bg-gray-300"></div>
</div>

            <div className="flex items-center justify-center gap-2 text-3xl">
                <p onClick={()=>signIn("github",
                    {callbackUrl:'http://localhost:3000/'}
                )} className="  
                rounded-full p-1">
                    <FaGithub />
                   
                </p>
                <p 
                 onClick={()=>signIn("google",
                    {callbackUrl:'http://localhost:3000/'}
                )}
                >
                  <FcGoogle />
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
