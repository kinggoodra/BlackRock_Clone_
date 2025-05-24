import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";

export default memo(function HeroBannerID() {
  return (
    <>
      <div className="flex flex-col gap-2 bg-gray-200 p-5 ">
        <p className="text-sm font-medium leading-none hover:underline decoration-4 decoration-orange-400">
          Aladdin By BlackRock
        </p>
        <h1 className="scroll-m-20  font-semibold text-black  tracking-tight text-4xl sm:text-5xl">
          BlackRock to Acquire HPS Investment Partners to Deliver Integrated
          Solutions Across Public and Private Markets
        </h1>
        <div className="flex  flex-col sm:flex-row  m-5 ">
          <img
            src="https://www.blackrock.com/blk-corp-assets/cache-1692806816000/images/media-bin/web/global/insights/aging-populations.webp"
         className="z-5  sm:h-screen transition-transform duration-300 hover:scale-105"
            alt="Asian woman"
          />
          <div className="sm:ml-10 mt-5">
            <p className="leading-10 [&:not(:first-child)]:mt-5 font-stretch-normal text-2xl">
              Demographic divergence is one of the <b>five mega forces</b> that
              we track. Aging populations in major economies are poised to limit
              how much countries can produce and grow. By contrast, selected
              emerging market economies can benefit from younger populations and
              growing middle classes.
            </p>
            <p className="leading-10 [&:not(:first-child)]:mt-5 font-stretch-normal text-2xl">
              Explore this interactive page and read our latest report, Decoding
              demographic divergence
            </p>
            <Button className="cursor-pointer rounded-none h-auto bg-black mt-20">
              <ChevronRightIcon /> Read The press release
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});
