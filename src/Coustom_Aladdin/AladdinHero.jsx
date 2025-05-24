import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";

export default memo(function AladdinHero() {
  return (
    <>
      <div  className="p-5 grid grid-cols-1 sm:grid-cols-2">
        <div>
          <p 
          className="text-sm font-medium leading-none hover:underline decoration-4 decoration-orange-400"
          >
            Aladdin By BlackRock
          </p>
          <br />
          <h2 className="scroll-m-20  pb-2 text-4xl font-light tracking-tight first:mt-0">
            THE LANGUAGE OF PORTFOLIOS
          </h2>
          <p className="text-lg font-light">
            Welcome to the new era of investment management tech.
          </p>
          <br />
          <p className="text-lg font-light">
            Today,views accross the risk / return outcomes and asset allocation
            are table stakes. Institution want to unlock vale and scale , while
            un covering insights accross horizontal functions,
            strategies,geographies and everything in between.
          </p>
          <br />
          <p className="text-lg font-light">
            The Aladdin® platform and Aladdin® community enable that—and more.
          </p>
          
          <a href="#Book a meeting">
            <Button   className="cursor-pointer rounded-none bg-black m-5">
              <ChevronRightIcon /> Read The press release
            </Button>
            </a>  
          
        </div>
        <img src="./src/Coustom_Aladdin/Hero.webp" alt="Yellow construction" />
      </div>
    </>
  );
});
