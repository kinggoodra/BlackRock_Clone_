import { memo } from "react";

export default memo(function Quotation({ p }) {
  return (
    <>
      <div
        className="grid grid-cols-1 grid-rows-1 bg-black  w-fit  p-10"
      >
        <div className=" sm:place-self-center     ">
          <img
            className="h-[50px] w-[50px] "
            alt="Quotation start"
            src="https://www.blackrock.com/blk-corp-assets/cache-1743594735000/include/common/images/campaign-quote-mark-blackbg.svg"
          ></img>
          <p className="scroll-m-20 text-2xl w-auto  font-bold tracking-tight text-amber-100 mt-5">
            {p}
          </p>
        </div>
      </div>
    </>
  );
});
