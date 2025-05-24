import { memo } from "react";

export default memo(function RelatedMaterials() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col p-15 gap-10">
        <h1
          className={
            " block scroll-m-20 text-4xl md:text-5xl font-bold tracking-tight   "
          }
        >
          BlackRock’s stewardship teams
        </h1>
        <p
          className={
            "  font-normal text-2xl   text-start  break-words max-w-full"
          }
        >
          More information about each team’s policies and approach can be found
          on their respective websites:
        </p>
        <div className="flex flex-col sm:flex-row    gap-10 justify-between ">
          <div className=" hover:shadow-2xl hover:cursor-pointer hover:border-black hover:border-2   bg-accent p-10 sm:w-[50%]  flex flex-col justify-start">
            <h3
              className={
                "  font-bold text-2xl text-black  text-start  break-words max-w-full"
              }
            >BlackRock Investmnet Stewardship</h3>
            <p
              className={"  font-normal  pt-10  text-start  break-words max-w-full"}
            >Counducts stewardship activities in relation to client’s assets managed by certain index equity
             portfolio managers. </p>
          </div>
          <div className=" hover:cursor-pointer hover:border-black hover:border-2  hover:shadow-2xl bg-accent p-10  sm:w-[50%] flex flex-col justify-start">
          <h3
              className={
                "  font-bold text-2xl text-black text-start  break-words max-w-full"
              }
            >BlackRock Active Investment Stwardship</h3>
            <p
              className={"  font-normal   pt-10 text-start  break-words max-w-full"}
            > Partners with  BlackRock’s active investment terms in relation to their holdings.</p>
          </div>
        
        </div>

      </div>
    </>
  );
});
