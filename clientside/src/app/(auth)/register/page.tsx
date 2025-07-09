/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-5">
       Join  <span className="text-purple-500">EduConnect</span>
      </h1>
      <div className="grid   max-w-2xl mx-auto items-center">
       

        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("username")}
                placeholder="User Name"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full border border-purple-500
                 text-purple-500 
                 font-semibold py-2 px-4 rounded-md shadow-md
                  hover:bg-purple-600 hover:text-white"
              >
                Register
              </button>
            </div>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link className="text-purple-600 hover:underline" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;