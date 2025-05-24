import { memo } from "react";

import TableD3 from "./TableD3";
import TacticalViews from "./TacticalViews";
import Euro_Tactical from "./Euro_Tactical";

export default memo(function AssetClassViews() {
  return (
    <>
      <div className="pt-20 sm:w-[60%] grid grid-cols-1 gap-5">
        <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
          Big calls
        </h3>
        <p className="text-md font-normal leading-6  text-black">
          Our highest conviction views on six-to 12 month (tactical) and over
          five-year (strategic) horizons, April 2025
        </p>
      </div>
 <TableD3/>
    <TacticalViews/>
    <Euro_Tactical/>
    </>
  );
});
