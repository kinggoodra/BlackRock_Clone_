import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo, useCallback, useState } from "react";
import CloudNative_hosted from "./CloudNative_hosted";
import API_Approch from "./API_Approch";

export default memo(function InstitutionalInovation() {
  const [BG, SetBG] = useState(false);
  const handleShowCommentary = useCallback(() => SetBG(false), []);
  const handleShowAssetClass = useCallback(() => SetBG(true), []);

  return (
    <>
      <div className="p-10">
        <h2 className="scroll-m-20  pb-2 text-4xl font-normal tracking-tight ">
          Institutional-grade innovation.
        </h2>
        <div className="mt-5">
          <div className="grid grid-rows-2 sm:grid-cols-2 gap-5 z-10  ">
            <div
              onClick={handleShowCommentary}
              className={` flex   justify-center items-center cursor-pointer h-24 w-60 rounded-tl-2xl rounded-tr-2xl  text-xl ${
                BG ? "hover:bg-gray-200 " : "bg-black text-white"
              }  `}
            >
              Cloud native/hosted
            </div>
            <div
              onClick={handleShowAssetClass}
              className={`sm:place-self-end  flex    justify-center cursor-pointer items-center h-24 w-60 rounded-tl-2xl  text-xl rounded-tr-2xl ${
                BG ? "bg-black text-white" : "hover:bg-gray-200"
              }    `}
            >
              Api-first approch
            </div>
          </div>
          <div className=" w-full">{BG ?  <API_Approch/>:<CloudNative_hosted/> }</div>
          <div className="p-10 bg-black flex-col text-accent gap-10">
            <b> BlackRock Engineering Blog</b>
        
            <p className="text-lg   font-light sm:w-[50%]">
              Learn about real-world applications for Studio in our white paper
              that covers our own principles for harnessing the power of citizen
              developers.
            </p>

            <div className={`sm:w-[25%] pt-5 `}>
              <Button
                variant="secondary"
                className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
              >
                <ChevronRightIcon /> Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
