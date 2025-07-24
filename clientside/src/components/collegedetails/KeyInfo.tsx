import { University } from '@/types/university'
import React from 'react'
import {
  CalendarClock,
  Users,
  MapPin,
  Landmark,
} from 'lucide-react'
type Props={
    mycollege:University
}
export default function KeyInfo({mycollege}:Props) {
      const infoList = [
    {
      label: 'Admission Deadline',
      value: mycollege.admissionDate || 'Not specified',
      icon: <CalendarClock className="text-blue-500 w-5 h-5" />,
    },
    {
      label: 'Student Body',
      value: mycollege.students ,
      icon: <Users className="text-green-500 w-5 h-5" />,
    },
    {
      label: 'Location',
      value: mycollege.location || 'Not specified',
      icon: <MapPin className="text-red-500 w-5 h-5" />,
    },
    {
      label: 'Established',
      value: "Since 2002",
      icon: <Landmark className="text-purple-500 w-5 h-5" />,
    },
  ];
  return (
    <div className='border rounded-xl p-4'>
        <h1 className="text-3xl font-bold mb-4">KeyInfo</h1>
<div className="flex flex-col gap-4">
        {infoList.map((item, index) => (
          <div key={index} className="flex items-center gap-4 bg-gray-100 p-3 rounded-md shadow-sm">
            <div>{item.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
