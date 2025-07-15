import { University } from '@/types/university'
import React from 'react'


type Props={
    mycollege:University
}
export default function Overview({mycollege}:Props) {
    
  return (
    <div>Overview {mycollege.name}</div>
  )
}
