'use client'

import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Users } from "lucide-react";
const features = [
  {
    title: "Academic Excellence",
    description: "Access to world-renowned faculty and cutting-edge research facilities",
    icon: <BookOpen />
  },
  {
    title: "Global Community",
    description: "Connect with students and alumni from around the world",
    icon: <Users />
  },
  {
    title: "Career Success",
    description: "Industry partnerships and career support for your future",
    icon: <Trophy />
  }
];

export default function Banner() {
  return (
 <div className="min-h-[1000px] bg-gradient-to-bl from-[#3c4fa6] to-[#1d2460] relative overflow-hidden py-20">
      
      {/*  Blurry Animated Circle */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#4f66c9] opacity-60 blur-3xl animate-pulse z-0"></div>
      
      {/*  Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-8">
        
        <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
          Your Future <br />
          Starts Here
        </h1>
        
        <p className="text-2xl md:text-3xl  text-white ">
          Discover world-class universities, explore cutting-edge research, and connect with a community of scholars 
          dedicated to academic excellence and innovation.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
         <Button 
          className="py-8 rounded-4xl px-12 bg-white/70
            text-black hover:text-white">Explore Colleges</Button>
            <Button  className="py-8 rounded-4xl px-12 bg-white/70 text-black hover:text-white">
                Watch Video</Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3
         gap-6 mt-12 w-full px-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 
              flex flex-col  items-center
              backdrop-blur-md p-6 rounded-2xl text-white text-center shadow-lg"
            >
              <div className="text-4xl mb-4 ">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
// #1d2460
// #1d2460