

import ApplicationForm from "@/components/pages/admission/ApplicationForm";
import useUnifiedUser from "@/hooks/useUnifiedUser";

export default async function page({params}:{
    params:Promise<{id: string}>}) {
   const {id}=await params
  
   
 
  return (
    <div className='container mx-auto'>
      <Card/>
      <ApplicationForm id={id}/>  
    </div>
  )
}

const Card=()=>{
  return(
    <div>
     
    </div>
  )
}
