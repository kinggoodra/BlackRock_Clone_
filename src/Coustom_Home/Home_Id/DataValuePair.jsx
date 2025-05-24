import { memo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DollarSign, Percent } from "lucide-react";

export default memo(function DataValuePair({b}) {
    return<>
    
      <div className="bg-black p-15">
        <Carousel className={"  "}>
          <CarouselContent>
            <CarouselItem>
              <div>
                <div className=" m-5  flex  sm:justify-center gap-5  w-auto h-[50%]   sm:p-5  ">
                  <DollarSign size={75} color="#ffa200" />
                  <b className="scroll-m-20 text-9xl font-bold text-amber-50 tracking-tight">
                    3.1
                  </b>
                </div>
                <b className="leading-7 [&:not(:first-child)]: sm:ml-[25%] text-amber-50">
                  $3.1 tn of our index equity assets are eligible for BlackRock
                  Voting Choice
                </b>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className=" m-5  flex gap-5  sm:justify-center w-auto h-[50%]   sm:p-5  ">
                  <DollarSign size={75} color="#ffa200" />
                  <b className="scroll-m-20 text-9xl font-bold text-amber-50 tracking-tight">
                    679.3
                  </b>
                </div>
                <b className="leading-7 [&:not(:first-child)]: sm:ml-[25%] text-amber-50">
                  $679.3bn of aur eligible AUM ($3.1tn) committed to Voting
                  Choice
                </b>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className=" m-5  flex gap-5  sm:justify-center w-auto h-[50%]   sm:p-5  ">
                  <b className="scroll-m-20 text-9xl font-bold text-amber-50 tracking-tight">
                    91
                  </b>
                  <Percent size={75} color="#ffa200" />
                </div>
                <b className="leading-7 [&:not(:first-child)]: sm:ml-[25%] text-amber-50">
                  Over 91% of our institutional index equity assets are eligible
                  for Voting Choice
                </b>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className=" m-5  flex gap-5  sm:justify-center w-auto h-[50%]   sm:p-5  ">
                  <b className="scroll-m-20 text-9xl font-bold text-amber-50 tracking-tight">
                    60
                  </b>
                </div>
                <b className="leading-7 [&:not(:first-child)]: sm:ml-[25%] text-amber-50">
                  Over 60mn participate in pension palns that are eligible for
                  Voting Choice
                </b>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className=" m-5  flex gap-5  sm:justify-center w-auto h-[50%]   sm:p-5  ">
                  <b className="scroll-m-20 text-9xl font-bold text-amber-50 tracking-tight">
                    650
                  </b>
                </div>
                <b className="leading-7 [&:not(:first-child)]: sm:ml-[35%] text-amber-50">
                  Over 650 global funds are eligible for Voting
                </b>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
})