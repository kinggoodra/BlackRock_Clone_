import { memo } from "react";
import ProsperityFlywheel from "./ProsperityFlywheel";
import UnlockPrivateMarkets from "./UnlockPrivateMarkets";
import RetirementToTokenization from "./RetirementToTokenization";
import BlackRocksPerformance from "./BlackRocksPerformance";
import Footer from "../Footer";
import RelatedContent from "./RelatedContent";

export default memo(function Sticky() {
  return (
    <>
      <nav className="sticky mt-[25%] sm:mt-[0%]  top-0 bg-blue-200 overflow-x-scroll sm:overflow-x-clip    p-3  z-10">
        <div className="grid  grid-cols-4 place-content-center   gap-1 min-w-max  h-auto text-xl mt-5 font-medium ">
          <a href="#1" className="place-self-center hover:underline">
            <span>The Prosperity flywheel</span>
          </a>
          <a href="#2" className="place-self-center hover:underline">
            <span>Unlock private markets</span>
          </a>

          <a href="#3" className="place-self-center hover:underline">
            <span>From retirement to tokenization </span>
          </a>
          <a href="#4" className="place-self-center hover:underline">
            <span>BlackRock's performance</span>
          </a>
        </div>
      </nav>
      <ProsperityFlywheel />
      <UnlockPrivateMarkets />
      <RetirementToTokenization />
      <BlackRocksPerformance />
      <RelatedContent />
      <br />
      <Footer margin={"100"} img={"/src/blackrock.svg "} />
    </>
  );
});
