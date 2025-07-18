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
import { University } from "@/types/university";
import Link from "next/link";


interface CollegeCardProps {
  colleges: University[];
}
export default function CollegeCard({colleges}:CollegeCardProps) {
  if (!colleges.length) {
  return <p className="text-center text-gray-500">No colleges found.</p>;
}

  return (
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
   
  </CardHeader>
  <CardContent>
  
  </CardContent>
  <CardFooter>
    <Link href={`/colleges/${college.id}`}>
       <Button className="bg-primarycolor">View Details</Button>
    </Link>

  </CardFooter>
</Card>)
        }
    </div>
  )
}
