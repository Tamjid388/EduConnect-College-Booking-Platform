import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import testimonial from "../../../../public/testimonial.json";
import { Star } from "lucide-react";
export default async function CarouselWithMultipleSlides() {
  return (
    <div className="my-12 ">
      <h1 className="text-4xl font-bold text-center mb-6">Student Reviews</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="">
          {testimonial.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 "
            >
              <div className="p-1">
                <Card className="h-48">
                  <CardContent className="flex flex-col space-y-2">
                 <div className="flex items-center gap-2">
                       <figure>
                        <img src={item.image} 
                        className="h-12 w-12 rounded-full"
                        alt="" />
                    </figure>

                    <div className="flex flex-col">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span>{item.university}</span>
                    <span className="flex items-center gap-1 ">Ratings: {item.rating} 
                        <Star className="text-yellow-400"/></span>
                    
                    </div>
                 </div>
                   
                    <p>
                     {item.review}
                    </p>
                    {/* <p>
                     {item.rating}
                    </p> */}
           
        
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
