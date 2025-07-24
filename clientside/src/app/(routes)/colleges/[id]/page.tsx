import DetailsCard from '@/components/collegedetails/DetailsCard';
import KeyInfo from '@/components/collegedetails/KeyInfo';
import Overview from '@/components/collegedetails/Overview';
import { University } from '@/types/university';
import { KeyIcon } from 'lucide-react';
import React from 'react'




export default async function CollegeDetails({params}:{
    params:Promise<{id: string}>}) {
    const {id}=await params
    console.log(id);

const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/colleges/${id}`,{
        cache:'force-cache',
        next:{revalidate:30}
    })
    const {data}=await res.json()
    let college=data
     
  return (
    <div className='container mx-auto  my-12
     grid grid-cols-1 md:grid-cols-12 gap-4 px-2'>
       <div className="md:col-span-8"> 
        {/* <DetailsCard mycollege={college}/> */}
        <Overview  mycollege={college} />
        </div>
       <div className="md:col-span-4">
        <KeyInfo mycollege={college}/>
       </div>
       

    </div>
  )
}
