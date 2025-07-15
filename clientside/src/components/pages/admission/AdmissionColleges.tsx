
"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { University } from '@/types/university'
import React from 'react'
type Props = {
  colleges: University[];
};
export default function AdmissionColleges({colleges}:Props) {
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-6 gap-6">
        {
            colleges.map(college=><Card key={college.id} className="pt-0">
   <figure className=" h-[200px] ">
    <img
    className="mt-0 h-full w-full object-cover rounded-t-md" 
    src={college.image}
    alt="college.name" />
    </figure>             
  <CardHeader className="">
    
    <CardTitle>{college.name}</CardTitle>
    <CardDescription>{college.location}</CardDescription>
    {/* <CardAction>Card Action</CardAction> */}
  </CardHeader>
  <CardContent>
    {/* <p>Card Content</p> */}
  </CardContent>
  <CardFooter>
    <Link href={`/admissions/${college.id}`}>
       <Button className="bg-primarycolor">
        Apply</Button>
    </Link>

  </CardFooter>
</Card>)
        }
    </div>
    </div>
  )
}
