
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { University } from '@/types/university'
import React, { ReactNode, useEffect, useState } from 'react'

type UniversityProps={
    colleges:University[]
}

export default function Search({colleges}:UniversityProps) {

    const [searchItem,setSearchItem]=useState('')
    const [filtered,setFiltered]=useState<University[]>([])
    const handleSearch=(e:React.MouseEvent<HTMLButtonElement>)=>{
       
        const result=colleges.filter(college=>college.name.toLowerCase().includes(searchItem.toLocaleLowerCase()))
        setFiltered(result)
        console.log("Search result",result);
    }
//     useEffect(() => {
//   const filteredResults = colleges.filter((college) =>
//     college.name.toLowerCase().includes(searchItem.toLowerCase())
//   );
//   setFiltered(filteredResults);
// }, [searchItem]);

  return (
      <div
      className="my-12 max-w-6xl mx-auto py-16 flex flex-col justify-center items-center
     border  gap-8 rounded-md bg-gray-100
    "
    >
      <div>
        <h1 className="text-4xl font-bold text-center">
          Find Your Perfect College
        </h1>
        <p className="font-semibold text-lg text-center py-2">
          Search through our comprehensive database of top universities
          worldwide
        </p>
      </div>
      <div className="flex w-full max-w-3xl items-center gap-2">
        <Input
          className="py-8 bg-white"
          type="text"
          placeholder="Search For Colleges,Universities...."
          onChange={(e)=>setSearchItem(e.target.value)}
        />
        <Button 
        onClick={handleSearch}
        className="p-8"  type="button"  variant="outline">
          Search
        </Button>
      </div>

       <div className="w-full max-w-3xl mt-8">
        {filtered.length > 0 ? (
          filtered.map((college) => (
            <div key={college.id} className="p-4 bg-white rounded shadow mb-4">
              <h2 className="text-xl font-semibold">{college.name}</h2>
              <p className="text-gray-600">{college.location}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No colleges found.</p>
        )}
      </div>

     
    </div>
  )
}
