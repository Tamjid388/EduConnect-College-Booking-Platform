/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
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
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    console.log(data);

    try {
      // Call API or handle login logic here
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-5">
        Welcome Back to <span className="text-purple-500">EduConnect</span>
      </h1>
      <div className="grid max-w-2xl mx-auto items-center">
        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
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
                className="w-full border border-purple-500 text-purple-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-purple-600 hover:text-white"
              >
                Login
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link className="text-purple-600 hover:underline" href="/register">
                Register
              </Link>
            </p>
            <div className="flex items-center gap-1 text-3xl">
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
