import { Button } from "@/components/ui/button";
import { Universal } from "@/UniversalClass/UniversalClass";
import { ChevronRightIcon, UniversityIcon } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default memo(function Article({ AladdinCard2, BTNHidden }) {
  let [length, Setlength] = useState(3);
  const location = useLocation();

  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-5">
        From our Community
      </h2>
      <div className="flex flex-col">
        <div className=" grid sm:grid-cols-3   gap-5 w-full">
          {AladdinCard2.slice(0, length).map((index, key) => (
            <div
              className=" ml-5 grid grid-cols-1 grid-rows-1  gap-3"
              key={key}
            >
              <img
                className=" h-auto w-auto"
                src={index[0]}
                alt="Preqinn part of black rock"
              />
              <div className="mt-6 w-auto">
                <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {index[1]}
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {index[2]}
                </p>
              </div>
              <div className={` mt-5`}>
                {index[3]?.startsWith("http") ? (
                  <a href={index[3]} target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer rounded-none bg-black">
                      <ChevronRightIcon /> Read more
                    </Button>
                  </a>  
                ) : (
                  <Link to={`${location.pathname}/${index[3]}`}>
                    <Button className="cursor-pointer rounded-none  bg-black ">
                      <ChevronRightIcon /> Read more {console.log()}
                    </Button>
                  </Link>
                )}
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
                Setlength(length + 3);
              }}
              disabled={length >= AladdinCard2.length}
            >
              LOAD MORE <ChevronRightIcon />
            </Button>
          </div>
        }
      </div>
    </>
  );
});
