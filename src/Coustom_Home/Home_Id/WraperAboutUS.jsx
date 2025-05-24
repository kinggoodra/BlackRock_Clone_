import { memo } from "react";
import Videos from "../Videos";
export default memo(function WraperAboutUS() {
    return<>
     <div className="grid grid-row-2 gap-4 p-10 bg-black w-full text-white">
        <h1
          className={
            "  scroll-m-20 text-8xl   font-bold tracking-tight text-amber-50   "
          }
        >
          {"About BlackRock"}
        </h1>
        <div className=" mt-[10%] w-full flex basis-auto flex-col sm:flex-row justify-between ">
          <div className="sm:w-[50%]">
            <p
              className={
                " text-base sm:text-lg md:text-xl font-semibold text-amber-50 text-start pt-[25%] break-words max-w-full"
              }
            >
              BlackRock is one of the world’s leading providers of investment
              advisory and risk managemnet solution. We are a fiduciary to our
              clients. We’re investing for the future on behalf of our clints,
              inspiring our employees, and supporting our local communities.
              watch the video to learn more.
            </p>
          </div>
          <div className="sm:w-[50%] ">
            {" "}
            <Videos
              url={
                "https://dwu7l6as21h3p.cloudfront.net/BLK-Investor-day-649.720p.wide.mp4"
              }
            />
          </div>
        </div>

      </div>
    </>
})