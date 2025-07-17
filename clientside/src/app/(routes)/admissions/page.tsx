import AdmissionColleges from '@/components/pages/admission/AdmissionColleges';
import React from 'react'

export default async function page() {
     const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/colleges`,{
        cache:'force-cache',
        next:{revalidate:30}
    })
    const { data: colleges }=await res.json()
   
  return (
    <div className='container mx-auto border rounded-2xl p-2'>
        <AdmissionColleges colleges={colleges}/>
    </div>
  )
}
