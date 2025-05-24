import { memo, useCallback, useEffect, useState } from "react";

export default memo(function BodyTabs({
  Tab1,
  Tab2,
  Tab3,
  Tab1Component,
  Tab2Component,
  Tab3Component,
}) {
  const [BG, SetBG] = useState(Tab1);

  return (
    <>
      <div className="m-5">
        <div
          onClick={(e) => SetBG(e.target.innerText)}
          className="grid grid-cols-3  gap-5 sm:gap-20 sm:z-10  "
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
        </div>
        <div className=" w-full">
          {
            BG === Tab1
            ? Tab1Component
            : BG === Tab2
            ? Tab2Component
            : BG === Tab3
            ? Tab3Component
            : ""}
        </div>
      </div>
    </>
  );
});
