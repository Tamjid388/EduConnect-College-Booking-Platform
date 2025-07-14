"use client";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useUnifiedUser from "@/hooks/useUnifiedUser";
import useCurrentUser from "@/hooks/useCurrentuser";

export const AvatarDropDown = () => {
//  const { user, loading, source } = useUnifiedUser();
const {user}=useCurrentUser()
  //  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;

console.log(user);
  console.log("User",user);






  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 
      rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          {/* <img className="rounded-full h-full" src={user?.image} alt="" /> */}
      </div>
      <span className="font-medium text-sm">{user.email}</span>
    </div>
  );
};
