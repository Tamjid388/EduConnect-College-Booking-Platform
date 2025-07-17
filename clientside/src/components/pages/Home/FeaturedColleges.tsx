import React from 'react'
import CollegeCard from '../Colleges/CollegeCard';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { University } from '@/types/university';

interface CollegeCardProps {
  college: University;
}

export default async function FeaturedColleges() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/colleges`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });
  const { data: colleges } = await res.json();

  // Featured Colleges
  const featuredColleges = colleges.slice(0, 3)
  return (
  <div>
    <div>
      <h1 className='text-4xl font-bold text-center'>Featured Colleges</h1>
      <p className='text-center text-xl font-medium opacity-80'>
        Discover Our Colleges</p>
    </div>
      <div className='my-16 grid grid-cols-3 gap-22'>
      {
        featuredColleges.map((college: University) => <Featuredcard key={college.id} college={college} />)
      }
    </div>
  </div>
  )
}


export const Featuredcard = ({ college }: CollegeCardProps) => {
  return (
    <div className=''>
      <Card key={college.id} className="pt-0">
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
          {/* <Link href={`/colleges/${college.id}`}>
            <Button className="bg-primarycolor">View Details</Button>
          </Link> */}

        </CardFooter>
      </Card>
    </div>
  )
}