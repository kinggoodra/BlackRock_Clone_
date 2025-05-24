import { memo } from "react";

export default memo(function MeetAuthors() {
  return (
    <>
      <div className="bg-gray-300 grid sm:grid-cols-2 gap-5   m-auto p-10">
        <div className="">
          <img src="https://www.blackrock.com/blk-corp-assets/cache-1743104653000/images/media-bin/web/global/headshots/jean-boivin-200x200.webp" />
          <h3 className="scroll-m-20 text-2xl mt-5  text-black font-bold  tracking-tight">
            Jean Bovin
          </h3>
          <p className="text-md font-normal mt-5 leading-6 text-black">
            <i>Hwad-BlackRock Investment Instute{" "}</i>
          </p>
        </div>
        <div className="">
          <img src="https://www.blackrock.com/blk-corp-assets/cache-1734356242000/images/media-bin/web/global/headshots/wei-li-headshot-may-2022-white-200x200.webp" />
          <h3 className="scroll-m-20 text-2xl mt-5  text-black font-bold  tracking-tight">Wei Li</h3>
          <p className="text-md font-normal mt-5 leading-6 text-black">Global Chife Investment Strategist-BlackRock Investment Institute<i></i></p>
        </div>
        <div className="">
          <img src="https://www.blackrock.com/blk-corp-assets/cache-1743406131000/images/media-bin/web/global/headshots/glenn-purves-200x200.webp" />
          <h3 className="scroll-m-20 text-2xl mt-5  text-black font-bold  tracking-tight">Glenn Purves</h3>
          <p className="text-md font-normal mt-5 leading-6 text-black"><i>Global Head of Macro-BlackRock Investment Institute</i></p>
        </div>{" "}
        <div className="">
          <img src="https://www.blackrock.com/blk-corp-assets/cache-1745238273000/images/media-bin/web/global/headshots/christian-ollinger-200x200.webp" />
          <h3 className="scroll-m-20 text-2xl mt-5  text-black font-bold  tracking-tight">Cristian Olinger</h3>
          <p className="text-md font-normal mt-5 leading-6 text-black"><i>Portfolio Strategist-BlackRock Investment Institute</i></p>
        </div>
      </div>
    </>
  );
});
