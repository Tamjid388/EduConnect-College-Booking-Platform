"use client";

import useUnifiedUser from "@/hooks/useUnifiedUser";
import useCurrentUser from "@/hooks/useCurrentuser";
import avatar from "../../../public/avatar.jpg"

export const AvatarDropDown = () => {
 const { user } = useUnifiedUser();

  //  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;

console.log(user);
  console.log("User",user);






  return (
    <div className="flex items-center gap-2 border p-1">
            <span className="font-medium text-sm">{user.email}</span>
      <div className="w-10 h-10 
      rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          {/* <img 
          className="rounded-full h-full"
           src={avatar} alt="" /> */}
      </div>

    </div>
  );
};
