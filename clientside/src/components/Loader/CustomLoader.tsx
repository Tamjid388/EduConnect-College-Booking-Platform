'use client'

import React from 'react'

const CustomLoader = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-white">
    //   <div className="relative w-16 h-16">
    //     <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        
    //     <div className="absolute inset-2 rounded-full bg-orange-100"></div>
    //   </div>
    // </div>
        <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Book-like animation */}
      <div className="relative w-16 h-16 animate-bounce">
        <div className="absolute inset-0 bg-orange-500 rounded-[4px] rotate-6 shadow-lg" />
        <div className="absolute inset-0 bg-orange-400 rounded-[4px] -rotate-6 shadow-md" />
        <div className="absolute inset-1 bg-white rounded-[2px]"></div>
      </div>

      {/* Branded Name */}
      <h1 className="mt-6 text-2xl font-bold text-orange-600 tracking-wide animate-pulse">
        EduConnect
      </h1>

      {/* Optional loading text */}
      <p className="mt-2 text-sm text-gray-600">Connecting to knowledge...</p>
    </div>
  )
}

export default CustomLoader
