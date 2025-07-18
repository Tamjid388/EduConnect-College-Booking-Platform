import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'
const applicationProcess = [
  {
    id: 1,
    title: "Choose College",
    description: "Browse and select your preferred college from our extensive list",
  },
  {
    id: 2,
    title: "Fill Application",
    description: "Complete the application form with your personal and academic details",
  },
  {
    id: 3,
    title: "Submit Documents",
    description: "Upload required documents and academic transcripts",
  },
  {
    id: 4,
    title: "Get Accepted",
    description: "Receive admission confirmation and start your academic journey",
  },
];

export default function Applicationprocess() {
  return (
    <div className='my-16'>
        <h1 className='text-center text-3xl font-bold mb-6'>
            Simple Application Process
        </h1>
        <div className='grid  md:grid-cols-4 justify-center items-center '>
            {
                applicationProcess.map((process)=><Card
                className='flex justify-center items-center  h-full border-0 shadow-none'
                key={process.id}>
               <h1 className='text-orange-600 font-bold bg-orange-200 w-10 h-10 rounded-full flex items-center justify-center'>{process.id}</h1>
                    <CardTitle className='font-bold'>{process.title}</CardTitle>
                   
                    <CardDescription className='text-center font-semibold'>
                   {process.description}
                    </CardDescription>

                </Card>)
            }
        </div>
    </div>
  )
}
