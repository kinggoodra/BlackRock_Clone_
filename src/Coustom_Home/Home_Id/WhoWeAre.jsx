import { memo } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Videos from "../Videos";

export default memo(function WhoWeAre({ _WhoWeArefnc }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    _WhoWeArefnc(inView);
  }, [inView]);

  return (
    <>
      <div id="Who we are" ref={ref}></div>
      <div className="p-10 mt-20   ">
        <h2 className="scroll-m-20 text-black pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Fincial well-being
        </h2>
      </div>
      <div className=" flex flex-col sm:flex-row p-5 w-auto gap-20">
        <div className="w-">
          <img
            src="https://www.blackrock.com/blk-corp-assets/cache-1580293686000/images/media-bin/web/global/svg/icons/BLK_icn_people_rgb.webp"
            alt="People icon"
            className="h-[50%] w-[25%]"
          />
          <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
            Week ahead{" "}
          </h3>
          <p className="text-md font-normal leading-6 text-black">
            of different backgrounds, races, and nationalities<sup>1</sup>
          </p>
        </div>
        <div className="">
          <img
            src="https://www.blackrock.com/blk-corp-assets/cache-1580293686000/images/media-bin/web/global/svg/icons/BLK_icn_convo_bubbles_rgb.webp"
            alt="Message icon"
            className="h-[50%] w-[25%]"
          />
          <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
            Week ahead{" "}
          </h3>
          <p className="text-md font-normal leading-6 text-black">
            addressing the needs of a multilingual client base<sup>2</sup>
          </p>
        </div>
        <div className="">
          <img
            src="https://www.blackrock.com/blk-corp-assets/cache-1580293686000/images/media-bin/web/global/svg/icons/BLK_icn_global_globe_rgb.svg"
            alt=" Globe icon"
            className="h-[50%] w-[25%]"
          />
          <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
            Week ahead{" "}
          </h3>
          <p className="text-md font-normal leading-6 text-black">
            enabling us to help more and more people<sup>3</sup>
          </p>
        </div>
      </div>
      <div className="grid grid-row-1 gap-4 p-5   ">
        <div className="  flex basis-auto flex-col sm:flex-row justify-between ">
          <div className="sm:w-[50%] ">
            {" "}
            <Videos
              url={
                "https://dwu7l6as21h3p.cloudfront.net/whats-your-why-life-at-Blk-326.720p.wide.mp4"
              }
            />
          </div>
          <div className="p-10 sm:w-[50%]">
            <p
              className={
                " text-base sm:text-lg  font-semibold text-black text-start  break-words max-w-full"
              }
            >
              At BlackRock, we believe we’re at our best when our employees
              connect their personal purpose to their work and our firm’s
              purpose. In our “What’s Your Why” series, employees share how they
              bring their passions to what they do.
            </p>
          </div>
        </div>
        <hr className="mt-10 border-[0.5px] border-black" />
      </div>
    </>
  );
});
