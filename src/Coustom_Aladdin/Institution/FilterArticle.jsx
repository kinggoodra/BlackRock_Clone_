import { Button } from "@/components/ui/button";
import { Universal } from "@/UniversalClass/UniversalClass";
import { ChevronRightIcon, Newspaper } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default memo(function FilterArticle({
  Filterlist,
  BTNHidden,
  BTNList,
  DisplayIMG

}) {
  const [ValFilter, SetFilter] = useState("ALL"?"ALL":Filterlist[0][3]);
  let [length, Setlength] = useState(6);
  return (
    <>
    
      <span className="text-3xl">Filter by :</span>
      <div
        onClick={(e) => {
          SetFilter(e.target.innerText.trim().toUpperCase());
        }}
        
      >
        <div className="sm:hidden  p-5">
         <Accordion type="single" collapsible>
  <AccordionItem  value="item-1">
    <AccordionTrigger> <b>{ValFilter}</b> </AccordionTrigger>
    <AccordionContent className={"justify-between items-center"} >
        {BTNList.map((index, key) => (
         <Button
            key={key}
            variant="secondary"
            className=" rounded-none mt-5  w-[100%]  cursor-pointer  text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon />
            {index}
            
          </Button>
  ))}
    </AccordionContent>
  </AccordionItem>
</Accordion>
        </div>
      
      
        <div className="hidden  sm:grid grid-cols-3 grid-row-3 p-5 sm:grid-cols-6 gap-5 w-[100%]">

        {BTNList.map((index, key) => (
          <Button
            key={key}
            id={""}
            variant="secondary"
            className=" rounded-none mt-5  cursor-pointer w-auto text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon />
            {index}
          </Button>
        ))}
        </div>


      </div>
      <div>
        <br />
        <div className=" grid sm:grid-cols-3   gap-5 w-full">
          {Filterlist.slice(0, length).map((index, key) => (
            <div
              className={` ml-5 grid  grid-rows-[auto]  gap-3 ${
                index[3].toLocaleUpperCase() === ValFilter ||
                ValFilter === "ALL".toLocaleUpperCase()
                  ? "block"
                  : "hidden"
              }`}
              key={key}
            >
              {/*  */}
              <div className="">
               
               {DisplayIMG?
             "":<img
               loading="lazy"
                 className={` h-auto w-auto ` }
                 src={index[0]}
                 alt={index[1]}
               />  
            }

               
                <br />
                <span className={`flex ${index[3]===""?"hidden":"block"} `}>
                  <Newspaper size={28} />
                  {index[3]}
                </span>
              </div>
              {/*  */}
              <div className=" w-auto">
                <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {index[1]}
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {index[2]}
                </p>
              </div>
              <div className={` mt-5`}>
                <Link>
                  <Button className="cursor-pointer rounded-none  bg-black ">
                    <ChevronRightIcon /> Read more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
         {
          <div
            className={`${BTNHidden ? "hidden" : "block"} flex justify-center`}
          >
            <Button
              className="cursor-pointer  w-50  rounded-none mt-15 bg-black "
              onClick={() => {
                Setlength(length + 6);
                
              }}
              disabled={length >= Filterlist.length}
            >
              LOAD MORE <ChevronRightIcon />
            </Button>
          </div>
        }
      </div>
    </>
  );
});
