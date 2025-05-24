import { memo, useCallback, useState } from "react";
import MarketCommentary from "./MarketCommentary";
import AssetClassViews from "./AssetClassViews";

export default memo(function CategoryNavigation() {
  const [BG, SetBG] = useState(false);
  const handleShowCommentary = useCallback(() => SetBG(false), []);
  const handleShowAssetClass = useCallback(() => SetBG(true), []);


  return (
    <>
      <div className="m-5">
        <div className="grid grid-cols-2 gap-20 z-10  ">
          <div
            onClick={handleShowCommentary}  
            className={` flex  justify-center items-center cursor-pointer h-24 w-60 rounded-tl-2xl rounded-tr-2xl  text-xl ${BG?"hover:bg-gray-200 ":"bg-black text-white"}  `}
          >
            Market commentary
          </div>
          <div
            onClick={handleShowAssetClass}
            className= {`place-self-end  flex  justify-center cursor-pointer items-center h-24 w-60 rounded-tl-2xl  text-xl rounded-tr-2xl ${BG?"bg-black text-white":"hover:bg-gray-200"}    `}
          >
            Asset class views
          </div>
        </div>
        <div className=" w-full">{BG?<AssetClassViews/>:<MarketCommentary/>}</div>
      </div>
    </>
  );
});
