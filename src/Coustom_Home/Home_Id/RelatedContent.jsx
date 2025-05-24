import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function RelatedContent() {
  return (
    <>
      <div className="w-full h-auto p-5 bg-blue-200">
        <div className="flex flex-col sm:flex-row gap-5 ">
          <div>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              The virtuous cycle: Global potential of capital markets
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 font-normal">
              Our conviction is that capital markets are the key to addressing
              some of the biggest economic challenges of our time, from
              accelerating economic growth, to helping more people in more parts
              of the world share in the benefits of economic prosperity.
            </p>
            <div className="text-accent col-start-2 row-start-4 text-center  mt-5">
            <Link to={""} >
              <Button variant="secondary" className="cursor-pointer text-amber-100 hover:text-black bg-black">
                <ChevronRightIcon /> Explore our view on captial markets 
              </Button>
            </Link>
          </div>

          </div>
          <div className=" h-1 sm:w-1  border-y-black sm:border-x-black bg-black"></div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Expanding the AI Infrastructure Partnership
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 font-normal">
              BlackRock, Global Infrastructure Partners, Microsoft, and MGX
              recently welcomed NVIDIA and xAI to the AI Infrastructure
              Partnership, strengthening the partnership's leadership as the
              platform seeks to invest in new and expanded AI infrastructure.
            </p>
            <div className="text-accent col-start-2 row-start-4 text-center  m-5">
            <Link to={""} >
              <Button variant="secondary" className="cursor-pointer text-amber-100 hover:text-black bg-black">
                <ChevronRightIcon /> Read the press release
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
});
