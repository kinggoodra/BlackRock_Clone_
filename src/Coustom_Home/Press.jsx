import { memo, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Press({ Ptag, Htag, NavigatePath, SRC, PContent, HContent ,BTNHidden}) {
  return (
    <>
    
      <div className="grid sm:grid-cols-2  bg-black  text-white h-screen w-[100%]">
        <img
          loading="lazy"
          className="h-screen w-screen object-cover "
          src={SRC}
          alt="Larry Fink"
        />

        <div className="bg-black flex flex-col  p-5 justify-around items-center">
          <h1
            className={
              Htag
                ? " block scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-amber-50 text-center px-4 "
                : "scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-amber-50 text-center px-4 "
            }
          >
            {HContent}
          </h1>

          <p
            className={
              Ptag
                ? " text-base sm:text-lg md:text-xl font-semibold text-amber-50 text-start m-5 break-words max-w-full"
                : "hidden"
            }
          >
            {PContent}
          </p>
        
          {BTNHidden?
            "":<Link to={NavigatePath}>
            <Button variant="secondary" className="cursor-pointer  ">
              <ChevronRightIcon /> Read Larry Fink Letter
            </Button>
          </Link>}
        </div>
      </div>
    </>
  );
}
export default memo(Press);
