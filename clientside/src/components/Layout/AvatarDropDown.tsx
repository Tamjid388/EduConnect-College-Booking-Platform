"use client";

import useUnifiedUser from "@/hooks/useUnifiedUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";
export const AvatarDropDown = () => {


 const { data: session } = useSession();
  const user = session?.user;








  return (

    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div>
           <div className="font-medium text-sm border border-orange-500
           p-1  h-12 w-12  rounded-full">
            <img className="h-full w-full  rounded-full" src="https://github.com/shadcn.png" alt="" />
           </div>
        </div>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuLabel>
          {user?.name || "Guest"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
       
         <DropdownMenuItem>
          <Link href="/profile"> Profile</Link>
         </DropdownMenuItem>
          <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer text-red-500"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
