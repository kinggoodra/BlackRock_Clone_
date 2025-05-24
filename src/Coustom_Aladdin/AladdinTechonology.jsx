import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

export default memo(function AladdinTechonology({
  hidden,
  AladdinTechonology,
}) {
  const location=useLocation()

  return (
    <>
      <div className=" grid grid-row-3 sm:grid-cols-3  m-4  gap-2">
        {AladdinTechonology.map((index, key) => (
          <div key={key}>
            <img
              src={index[0]}
              alt={index[1]}
              className="    h-auto       w-[100px]"
            />
            <div className=" grid grid-rows-[300px,300px,300px]  gap-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {index[2]}
              </h3>
              <p className="text-md font-medium  leading-relaxed mt-5   ">
                {index[3]}
              </p>
               <Link to={`${location.pathname}/${index[4]}`} className= {`${hidden?  "block":"hidden"}`}>
                  <Button
                  
                    variant="link_"
                    className="text-black cursor-pointer mt-2 "
                  >
                    <ChevronRightIcon /> Be more resilient
                  </Button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
