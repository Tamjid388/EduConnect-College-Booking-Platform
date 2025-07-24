import CollegeCard from "@/components/pages/Colleges/CollegeCard"

export default async function page() {
    const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/colleges`,{
        cache:'force-cache',
        next:{revalidate:30}
    })
    const allcollege=await res.json()
   let colleges=allcollege.data

  return (
    <div className='container mx-auto'>
        <h1 className="text-center text-4xl font-bold">
            All Colleges
        </h1>
        <p className="text-center text-xl text-gray-600 font-medium mt-2">
            Discover your perfect educational institution</p>

        <CollegeCard colleges={colleges}/>    
    </div>
  )
}
