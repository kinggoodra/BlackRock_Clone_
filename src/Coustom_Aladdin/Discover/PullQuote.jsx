import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";

export default memo(function PullQuote({PTag,B,small,BTNHidden}) {
    
    return<>
      <div className="flex flex-col sm:flex-row  p-10 gap-5">
        <div className=" bg-yellow-400 p-2 w-[20%] h-[20%]  sm:w-[10%] sm:h-[10%] ">
          <img
            src="https://www.blackrock.com/blk-inst-c-assets/cache-1745919577000/include/common/images/campaign-quote-mark-alternatebg.svg"
            alt="Quotation start"
          />
        </div>
        <div className="sm:w-[50%]  flex flex-col gap-2">
          <p className="text-2xl font-normal  leading-relaxed  ">
           {PTag}
           </p>
          <br />
          <small className= " text-sm font-normal leading-none  ">
          <b>{B}</b>
          
        </small>
        <small className= " text-sm font-normal leading-none  ">
          {small}
        </small>
        <div className={`w-full ${BTNHidden?  "block" :"hidden"} pt-5 `}>
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> Read more
          </Button>
        </div>
        </div>

      </div>
    </>
})