import { Universal } from "@/UniversalClass/UniversalClass";
import { memo, useState, Component} from "react";
import FilterArticle from "../Institution/FilterArticle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default memo(function BodyTabFilterArtical({
  Tab1,
  Tab2,
  Tab3,
  Tab4,
  Tab5,
  Tab6,
}) {
  const [BG, SetBG] = useState(Tab1);

  return (
    <>


      <div className={`p-5 `} >
        <div
          onClick={(e) => SetBG(e.target.innerText)}
          className={`hidden sm:grid sm:grid-cols-6  gap-1.5 sm:z-10   `  }
        >
         
        
           <div
            className={` flex  justify-center items-center cursor-pointer   h-24 w-full rounded-tl-2xl rounded-tr-2xl  text-xl ${
              BG === Tab1 ? "bg-black text-white " : " hover:bg-gray-200"
            }  `}
          >
            {Tab1}
          </div>

          <div
            className={` flex  justify-center items-center cursor-pointer h-24 w-full rounded-tl-2xl rounded-tr-2xl  text-xl ${
              BG === Tab2 ? "bg-black text-white " : " hover:bg-gray-200"
            }  `}
          >
            {Tab2}
          </div>
          <div
            className={`place-self-end  flex  justify-center cursor-pointer items-center h-24 w-full rounded-tl-2xl  text-xl rounded-tr-2xl
            ${
              BG === Tab3 ? "bg-black text-white " : " hover:bg-gray-200"
            }     `}
          >
            {Tab3}
          </div>

          {/*  */}

          <div
            className={` flex  justify-center items-center cursor-pointer   h-24 w-full rounded-tl-2xl rounded-tr-2xl  text-xl ${
              BG === Tab4 ? "bg-black text-white " : " hover:bg-gray-200"
            }  `}
          >
            {Tab4}
          </div>

          <div
            className={` flex  justify-center items-center cursor-pointer h-24 w-full rounded-tl-2xl rounded-tr-2xl  text-xl ${
              BG === Tab5 ? "bg-black text-white " : " hover:bg-gray-200"
            }  `}
          >
            {Tab5}
          </div>
          <div
            className={`place-self-end  flex  justify-center cursor-pointer items-center h-24 w-full rounded-tl-2xl  text-xl rounded-tr-2xl
            ${
              BG === Tab6 ? "bg-black text-white " : " hover:bg-gray-200"
            }     `}
          >
            {Tab6}
          </div>

         
        </div>
  <div >
<div className="mb-5 sm:hidden">
<Select  onValueChange={(value)=>SetBG(value)}>
  <SelectTrigger className="w-full border-2 border-black">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent className={"text-black text-xl w-full"}>
    <SelectItem value={Tab1}>{Tab1}</SelectItem>
    <SelectItem value={Tab2}>{Tab2}</SelectItem>
    <SelectItem value={Tab3}>{Tab3}</SelectItem>
    <SelectItem value={Tab4}>{Tab4}</SelectItem>
    <SelectItem value={Tab5}>{Tab5}</SelectItem>
    <SelectItem value={Tab6}>{Tab6}</SelectItem>
  </SelectContent>
</Select>
</div>

  </div>
        <div className=" w-full">
          {BG === Tab1
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter1Discover}   BTNHidden={false} BTNList={Universal.BTNList[1]} />
            : BG === Tab2
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter2Discover} DisplayIMG={true} BTNHidden={false} BTNList={Universal.BTNList[0]} />
            : BG === Tab3
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter3Discover} DisplayIMG={false} BTNHidden={false} BTNList={Universal.BTNList[2]} />
            : BG === Tab4
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter4Discover} DisplayIMG={false} BTNHidden={false} BTNList={Universal.BTNList[3]} />
            : BG === Tab5
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter5Discover} DisplayIMG={false} BTNHidden={false} BTNList={Universal.BTNList[3]} />
            : BG === Tab6
            ?<FilterArticle Filterlist={Universal.DynamicArticleListFilter6Discover} DisplayIMG={true} BTNHidden={false} BTNList={Universal.BTNList[4]} />
            :"" }
        </div>

      </div>
    </>
  );
});
