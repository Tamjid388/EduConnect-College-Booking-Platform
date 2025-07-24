
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/pages/Home/Banner";
import CarouselWithMultipleSlides from "@/components/pages/Home/Carousel";
import FeaturedColleges from "@/components/pages/Home/FeaturedColleges";
import { SearchColleges } from "@/components/pages/Home/SearchBarSection/SearchColleges";




export default function Home() {
  return (
    <div className="">
  <Banner/>
      <main className="container mx-auto px-2">
        
   <SearchColleges/>
  <FeaturedColleges/>
  <CarouselWithMultipleSlides/>



      </main>
    <Footer/>
    </div>
  );
}
