"use client"
import useUnifiedUser from '@/hooks/useUnifiedUser';
import { FilePenLine, User, GraduationCap, Mail, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from 'next-auth/react';
import CustomLoader from '@/components/Loader/CustomLoader';
import axios from 'axios';
import EditProfileDialog from '@/components/Profile/EditProfileDialog';
type User = {
  username: string;
  email: string;
  university?: string;
  address?: string;
  image?: string
};

type UserResponse = {
  data: User;
};
export default function page() {

  const { data: session, status } = useSession()
  const user = session?.user;



  const [userData, setUserData] = useState<UserResponse | null>(null);


  const email = session?.user?.email as string
 console.log(email);

  useEffect(() => {
    if (email) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [email]);




  console.log(userData);
  if (status === "loading") {
    return <CustomLoader />
  }
  return (
    <div className='max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto '>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold py-2'>My Profile</h1>
      <p className='text-base sm:text-lg md:text-xl font-medium text-center text-gray-700 mb-6'>Manage your account information and preferences</p>
      <div className=' border
     bg-linear-to-r from-orange-400 to-orange-600 rounded-t-xl
     p-8 flex flex-col md:flex-row items-start justify-between 
     '>

        <div className='flex items-center justify-center '>
          <div className='flex items-center gap-4'>
            <figure className='w-24 h-24'>
              {userData?.data?.image ? (
                <img
                  src={userData?.data?.image}
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                />
              ) : (
                <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10" />
                </div>
              )}
            </figure>
            <div>
              <h1 className='text-3xl font-bold my-2 text-white'>{userData?.data?.username}</h1>
              <h1 className='text-white'>{userData?.data?.email}</h1>
            </div>
          </div>
        </div>





        <div className='flex'>

          <EditProfileDialog email={email} />
        </div>

      </div>
      <div className='p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 border border-t-0 rounded-b-xl'>

        <div className="flex items-center gap-3">
          <User className='text-orange-600 h-8 w-8 sm:h-10 sm:w-10 opacity-85' />
          <div>
            <p className='text-sm sm:text-base text-gray-600'>Full Name</p>
            <h1 className='font-semibold text-base sm:text-lg'>
              {userData?.data?.username}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className='text-orange-600 h-8 w-8 sm:h-10 sm:w-10 opacity-85' />
          <div>
            <p className='text-sm sm:text-base text-gray-600'>Email Address</p>
            <h1 className='font-semibold text-base sm:text-lg'> {userData?.data?.email}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap className='text-orange-600 h-8 w-8 sm:h-10 sm:w-10 opacity-85' />
          <div>
            <p className='text-sm sm:text-base text-gray-600'>University</p>
            <h1 className='font-semibold text-base sm:text-lg'> {userData?.data?.university || "Not Specified"}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className='text-orange-600 h-8 w-8 sm:h-10 sm:w-10 opacity-85' />
          <div>
            <p className='text-sm sm:text-base text-gray-600'>Address</p>
            <h1 className='font-semibold text-base sm:text-lg'>{userData?.data?.address || "Not Specified"}</h1>
          </div>
        </div>

      </div>

    </div>
  )
}
