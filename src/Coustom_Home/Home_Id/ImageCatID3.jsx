import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";

export default memo(function ImageCtaID3({HTag,SRC,Ptag,BTNText}) {
  return (
    <>
        <hr className="border-4   border-black " />

      <div className="mt-5 h-auto grid sm:grid-cols-2 w-full">
        <img
          src={SRC}
          alt="podcast banner"
        />
        <div>
          <h1 className="scroll-m-20 pl-5 pt-5 text-black text-2xl font-bold tracking-tight lg:text-5xl">
          {HTag}

          </h1>
          <p className=" leading-7 [&:not(:first-child)]:mt-6 pl-5 sm:w-150 text-black">
          {Ptag}
          </p>
          <Link to={""} >
              <Button variant="secondary" className= "m-5 rounded-none cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black">
                <ChevronRightIcon /> {BTNText}
              </Button>
            </Link>
        </div>
      </div>


    </>
  );
});
