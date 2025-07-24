

import { University } from '@/types/university'
import React from 'react'


type Props={
    mycollege:University
}
export default function EventandSports({mycollege}:Props) {
    
  return (
    <div className='mt-4'>
      <h2 className="text-xl font-semibold mb-2">Events</h2>
      <div className='flex flex-wrap gap-2'>
        {mycollege.details.events.map((event: string, idx: number) => (
          <div key={idx} className='bg-orange-300 px-3 py-1 rounded-2xl'>
            <p>{event}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Sports</h2>
      <div className='flex flex-wrap gap-2'>
        {mycollege.details.sports.map((sport: string, idx: number) => (
          <div key={idx} className='bg-green-300 px-3 py-1 rounded-2xl'>
            <p>{sport}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
