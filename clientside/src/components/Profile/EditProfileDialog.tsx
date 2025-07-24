"use client";
import React from 'react';
import { FilePenLine } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

type FormValues = {
  username: string;
  email: string;
  university?: string;
  address?: string;
  image?: string;
};

type Props = {
  onUpdate: (data: any) => void; // callback after successful update
};
type EmailProp={
  email:string
}

export default function EditProfileDialog({email}:EmailProp) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
     
      university: "",
      address: "",
      image: ""
    }
  });
  

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      const result = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${email}`,
        data,
        { withCredentials: true }
      );
        console.log("Response Status:", result.status); 
    if(result.status===200){
      toast("Profile Update Successfull")
    }
     
      // reset(); 
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-orange-600">
          Edit Profile <FilePenLine />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Enter new profile details and click save.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register("username", { required: true })}
              />
            </div>
         
            <div className="grid gap-2">
              <Label htmlFor="university">University</Label>
              <Input
                id="university"
                {...register("university")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                {...register("address")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image Url</Label>
              <Input
                id="image"
                type="url"
                {...register("image")}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="gradientOutline">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="gradient" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
