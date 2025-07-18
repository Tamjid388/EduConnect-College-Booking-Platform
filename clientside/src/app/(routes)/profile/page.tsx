"use client"
import useUnifiedUser from '@/hooks/useUnifiedUser';
import { FilePenLine } from 'lucide-react';
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
type User = {
  username: string;
  email: string;
  university?:string;
  address?:string;
};

type UserResponse = {
  data: User;
};
export default function page() {
    const [userData, setUserData] = useState<UserResponse | null>(null);
     const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    university: "",
    address: "",
  });
    const { user } = useUnifiedUser();
       const email = user?.email;
     useEffect(() => {
    if (email) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [email]);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
//   Handle Submit
const handleSubmit=(e: React.FormEvent)=>{
e.preventDefault();
console.log("my Formdata",formData);
}
  return (
    <div className='max-w-6xl mx-auto border
     bg-linear-to-r from-orange-200 to-orange-300 rounded-xl
     p-8 flex items-start justify-between
     '>
       
       <div>
         <h1 className='text-3xl font-bold my-2'>{userData?.data.username}</h1>
         <h1>{userData?.data.email}</h1>
       </div>
       <div className='flex'>
       
 <Dialog>
      <form  onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <Button variant="outline"><FilePenLine /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
      <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="university">University</Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="gradientOutline">Cancel</Button>
            </DialogClose>
            <Button variant="gradient" type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
       </div>

    </div>
  )
}
