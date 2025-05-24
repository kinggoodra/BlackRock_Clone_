import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default memo(function DownloadWhitePaper({P,BTNText}) {
  return (
    <>
      <div className="p-10 bg-yellow-300 flex-col  gap-10">
        
        <p className="text-lg font-light sm:w-[50%]">
{P}
        </p>

        <div className={`sm:w-[25%] pt-5 `}>
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> {BTNText}
          </Button>
        </div>
      </div>
    </>
  );
});
