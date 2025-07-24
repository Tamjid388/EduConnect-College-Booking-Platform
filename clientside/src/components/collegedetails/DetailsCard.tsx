
import { University } from '@/types/university'
import React from 'react'


type Props={
    mycollege:University
}
export default function DetailsCard({mycollege}:Props) {
    console.log("myuc",mycollege);
  return (
    <div className='mt-4'>
      <h1 className='font-bold text-5xl'>{mycollege.name}</h1>
   
      <p className='text-xl my-4 font-medium opacity-80'>
        {mycollege.details.description}
      </p>
    </div>
  )
}
