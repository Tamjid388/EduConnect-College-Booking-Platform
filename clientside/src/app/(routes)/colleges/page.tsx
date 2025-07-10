import CollegeCard from "@/components/pages/Colleges/CollegeCard"

export default async function page() {
    const res=await fetch('http://localhost:3000/colleges.json',{
        cache:'force-cache',
        next:{revalidate:30}
    })
    const colleges=await res.json()
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
