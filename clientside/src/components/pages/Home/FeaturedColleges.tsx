import React from 'react'
import CollegeCard from '../Colleges/CollegeCard';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { University } from '@/types/university';
import Link from 'next/link';
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
      <div className='my-16 grid grid-cols-1 md:grid-cols-3 gap-22'>
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
      <Card key={college.id} className="pt-0 gap-0">
        <figure className=" h-[200px] ">
          <img
            className="mt-0 h-full w-full object-cover rounded-t-md"
            src={college.image}
            alt="college.name" />
        </figure>
        <CardHeader className="mt-4 ">

          <CardTitle className='text-xl font-medium'>{college.name}</CardTitle>
          {/* <CardDescription>{college.location}</CardDescription> */}

        </CardHeader>
        <CardContent className=' '>
          <div className='flex items-center gap-1 text-sm'>
            <Calendar className='h-4 w-5 text-orange-500' />
            <span className='font-semibold opacity-80'>Admission: {college.admissionDate}</span>
          </div>
          <div className='flex items-center gap-1 text-sm'>

            <BookOpen className='h-4 w-5 text-orange-500' />
            <span className='font-semibold opacity-80'>Research Project: {college.researchCount}</span>
          </div>
          <h1 className='font-medium my-2'>Recent Events:</h1>
          <div className='flex  gap-2'>

            {
              college.details.events.map((event, idx) => <div
                className='bg-orange-100 text-orange-500 rounded-2xl px-2 text-sm'
                key={idx}>
                {event}
              </div>)
            }
          </div>
          <h1 className='font-medium my-2 '>Sports:</h1>
          <div className='flex gap-2 flex-wrap'>
            {
              college.details.sports.map((sport, idx) => (
                <div
                  key={idx}
                  className=' text-orange-500 border border-orange-500
        rounded-2xl px-2 text-sm'
                >
                  {sport}
                </div>
              ))
            }
          </div>
        </CardContent>
        <CardFooter>

          <Link className='mt-4 w-full border' href={`/colleges/${college.id}`}>
            <Button variant={"gradient"} className="w-full">View Details</Button>
          </Link>

        </CardFooter>
      </Card>
    </div>
  )
}