import Overview from '@/components/collegedetails/Overview';
import { University } from '@/types/university';
import React from 'react'




export default async function CollegeDetails({params}:{
    params:Promise<{id: string}>}) {
    const {id}=await params
    console.log(id);

const res=await fetch('http://localhost:3000/colleges.json',{
        cache:'force-cache',
        next:{revalidate:30}
    })
    const colleges=await res.json()

     const mycollege=colleges.find((college:University)=>college.id===id)
     console.log(mycollege);
  return (
    <div className='container mx-auto'>
        <Overview  mycollege={mycollege}/>


    </div>
  )
}
