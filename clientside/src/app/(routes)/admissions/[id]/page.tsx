

import ApplicationForm from "@/components/pages/admission/ApplicationForm";

export default async function page({params}:{
    params:Promise<{id: string}>}) {
   const {id}=await params
    
   
 
  return (
    <div className='container mx-auto'>
   
      <ApplicationForm id={id}/>  
    </div>
  )
}
