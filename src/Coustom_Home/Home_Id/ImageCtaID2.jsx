import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Video } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";
//emeragration not required
export default memo(function ImageCtaID2({ src, alt, HTag, PTag, BtnText ,BG }) {
  return (
    <>
      <div id="Transcript" className= {` ${BG?"bg-black":"bg-white"} w-full   `} >
        <div className="  grid sm:grid-cols-2  text-start gap-1 p-5 justify-center  items-center">
          <div className= {`${BG?"":"order-2"} `}>
            <h2 className= {`scroll-m-20  ${BG?"text-amber-50" :"text-black"}  pt-15 text-3xl font-semibold tracking-tight first:mt-0`} >
              {HTag}
            </h2>
            <br />
            <p className={`${BG?"text-amber-50":"text-black"} text-start`}>{PTag}</p>
            <Link to={""}>
              <Button
                variant="secondary"
                className=" rounded-none mt-5  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
              >
                <ChevronRightIcon />
                {BtnText}
              </Button>
            </Link>
          </div>
          <div className="mt-10 ">
            <img src={src} className={`h-auto w-auto ${BG?"order-2":""}`} alt={alt} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
});
