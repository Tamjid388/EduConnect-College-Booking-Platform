import { University } from '@/types/university'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger }
 from "@/components/ui/tabs"
import DetailsCard from './DetailsCard'
import EventandSports from './EventandSports'

type Props={
    mycollege:University
}
export default function Overview({mycollege}:Props) {
    console.log("myuc",mycollege);
  return (
    <div className='border rounded-xl p-4'>
    <Tabs defaultValue="account" className="">
  <TabsList>
          <TabsTrigger value="Details">Details</TabsTrigger>
          <TabsTrigger value="password">Event</TabsTrigger>
  </TabsList>


  <TabsContent className='w-full ' value="Details">
    <DetailsCard  mycollege={mycollege} />
  </TabsContent>
  <TabsContent value="password">
    <EventandSports mycollege={mycollege}/>
    </TabsContent>
</Tabs>
    </div>
  )
}
