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

export const AvatarDropDown = () => {
 const { user } = useUnifiedUser();

  if (!user) return <p>Please login</p>;








  return (

    <DropdownMenu >
      <DropdownMenuTrigger>
        <div>
           <span className="font-medium text-sm border-1 py-2 px-1 rounded-xl">{user.email}</span>
        </div>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
       
         <DropdownMenuItem>
          <Link href="/profile"> Profile</Link>
         </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
