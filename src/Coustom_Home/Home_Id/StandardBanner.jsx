import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";

export default memo(function StandardBanner() {
  return (
    <>
      <div className="flex flex-col p-10 bg-yellow-300">
        <p className="text-sm font-medium leading-none hover:underline  ">
          Aladdin By BlackRock
        </p>
        <h1 className="scroll-m-20  pt-5 text-black text-5xl font-bold tracking-tight lg:text-5xl">
          Weekly market commentary
        </h1>
        <hr className="bg-black mt-20 border-black border-2" />
        <div className=" flex flex-row mt-10   gap-5 content-center ">
          <small className="text-xl font-normal leading-none  ">
            Apr 21 , 2025
          </small>
          <div className=" w-0.5 border-x-black bg-black"></div>
          <h4 className="scroll-m-20 text-xl font-semibold underline underline-offset-8 tracking-tight">
            {Universal.indexes.Insights[0]}
          </h4>
        </div>
      </div>
    </>
  );
});
