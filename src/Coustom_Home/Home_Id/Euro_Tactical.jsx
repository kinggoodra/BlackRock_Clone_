import { Input } from "@/components/ui/input";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default memo(function Euro_Tactical() {
  const [SearchAsset, SetSearchAsset] = useState("");

  return (
    <>
      <div className="pt-20 sm:w-[60%] grid grid-cols-1 gap-5">
        <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
          Euro-denominated tactical granular views
        </h3>
        <p className="text-md font-normal leading-6  text-black">
          Six-to-12-month tactical views on selected asset vs. board global
          asset classes by level of conviction, April 2025
        </p>
        <p className="text-md font-normal leading-6  text-black">
          We have lengthened our tactical investment horizon back to six to 12
          months. The table below reflects this and, importantly, leaves aside
          the opportunity for alpha, or the potential to generate
          above-benchmark returns – especially at a time of heightened
          volatility.{" "}
        </p>
        <img
          src="https://www.blackrock.com/blk-corp-assets/cache-1711462975000/images/tools/blackrock-investment-institute/asset-class-views/legend_granular.png"
          alt="Legend Granular"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full  mt-5">
        <Input
          onChange={(e) => SetSearchAsset(e.target.value.toUpperCase())}
          type="Search"
          placeholder="Search Assets "
          className="rounded-none border-black w-[75%] "
        />
      </div>
      <div className="hidden sm:block overflow-y-auto h-[500px] mt-5">
        <table className="   h-auto m-1   ">
          <tr className=" border-black   border-b-2 ">
            <th className="text-start   sm:w-[25%]">Asset</th>
            <th className="text-start   sm:w-[25%]">Tactical view</th>
            <th className="text-start  sm:w-[25%]">Commentary</th>
          </tr>
          {Universal.EuroTacticalViews.filter((item) => {
            return item[0].toLocaleUpperCase().includes(SearchAsset);
          }).map((item, index) => (
            <tr className=" hover:bg-gray-100" key={index}>
              <td className=" p-5 text-start w-[50%] sm:w-[25%] ">
                <b>{item[0]}</b>
              </td>
              <td className=" p-5 text-start w-[50%] sm:w-[25%]  ">
                <img src={!item[1] ? "" : item[1]} alt={item[3]} />
              </td>
              <td className="p-5 text-start  sm:w-[100%]    ">
                <p className="text-md font-normal leading-6  text-black">
                  {item[2]}
                </p>
              </td>
            </tr>
          ))}
        </table>
      </div>
{/*  */}
      <div className="  block sm:hidden overflow-y-auto h-[500px] mt-5">
        <table className="   h-auto m-1  ">
          <tr className=" border-black   border-b-2 ">
            <th className="text-start   ">Asset</th>
            <th className="text-start   ">Tactical view</th>
          </tr>
          {Universal.EuroTacticalViews.filter((item) => {
            return item[0].toLocaleUpperCase().includes(SearchAsset);
          }).map((item, index) => (
            <>
              <tr key={index}>
                <td className=" p-5 text-start  ">
                  <b>{item[0]}</b>
                </td>
                <td className=" p-5 text-start    ">
                  <img src={!item[1] ? "" : item[1]} alt={item[3]} />
                </td>
              </tr>

              <tr className="">
                <th className="text-start  ">Commentary</th>

                <th className=" p-5 text-start    ">
                  <p className="text-md font-normal leading-6  text-black">
                    {item[2]}
                  </p>
                </th>
              </tr>
            </>
          ))}
          </table>
</div>
      <div className="m-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={"flex justify-center"}>
              Source
            </AccordionTrigger>
            <AccordionContent>
              <small className="text-xs font-sans leading-5 inline-block ">
                <b>
                  Past performance is not a reliable indicator of current or
                  future results.
                </b>{" "}
                It is not possible to invest directly in an index. Note: Views
                are from a euro perspective, April 2025. This material
                represents an assessment of the market environment at a specific
                time and is not intended to be a forecast or guarantee of future
                results. This information should not be relied upon as
                investment advice regarding any particular fund, strategy or
                security.
              </small>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
});
