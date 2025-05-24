import { memo } from "react";
import Videos from "../Videos";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default memo(function TranscriptID3() {
  return (
    <>
      <div className="bg-gray-300 grid sm:grid-cols-2 gap-5 pt-15 p-5">
        <div className="z-10 sm:mt-20">
          <Videos
            url={
              "https://dwu7l6as21h3p.cloudfront.net/MarketTake_Ep186-673.720p.wide.mp4"
            }
          />
        </div>
        <div className=" justify-self-end ">
          <h3 className="scroll-m-20 text-4xl text-black font-bold  tracking-tight">
            When economic rules start to bind
          </h3>
          <div className="mt-10 sm:mt-15 flex flex-col gap-5">
            <div className="flex flex-row ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
                <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                  Binding econimic rules{" "}
                </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                U.S. policy shifts are adding to the global transformation
                already underway. We track rules that will shape poicy and focus
                on themes-like AI-dirving returns.{" "}
              </p>
            </div>
            <div className="flex flex-row ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
              <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                Market blackdrop
              </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                U.S.stocks steadied least week but still down 6% since the April
                2 tariff announcement. U.S. 10-year yields are up since then to
                near 4.35%.
              </p>
            </div>
            <div className="flex flex-row ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
              <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                Week ahead{" "}
              </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                Global flash PMIs will be the main focus this week to see how
                U.S. tariffs and policy uncertainty are impcating incoming
                orders and the outlook for activity.
              </p>
            </div>
          </div>
        </div>
        <div className="">

        <p className="text-md font-normal leading-6 text-black">
          We have argued for a few years that mega forces, like geopolitical
          fragmentation, are transforming the world. U.S. trade policy is adding
          to this transformation. This isn’t a business cycle, but a long-term
          structural shift. It raises big questions about the trajectory for
          global markets, making long-term expectations more sensitive to
          short-term news. We focus on themes that can drive returns over broad
          asset classes. We see the AI mega force driving returns over time,
          mostly in the U.S.
        </p>
        <div className=" w-full   text-center  m-5">
            <Link to={""} >
              <Button variant="secondary" className= " rounded-none cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black">
                <ChevronRightIcon /> Download full commentry (PDF)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
