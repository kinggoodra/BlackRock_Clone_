import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";

export default memo(function Award_Sotlight({AwardSpotlight}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 ml-5  mt-5 gap-10">
        {AwardSpotlight.map((index, key) => (
          <div className="grid grid-cols-1 grid-rows-3" key={key}>
            <img src={index[0]} alt="" />
            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {index[1]}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-4">{index[2]}</p>
          </div>
        ))}
      </div>
    </>
  );
});
