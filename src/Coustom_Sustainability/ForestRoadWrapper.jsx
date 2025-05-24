import { memo } from "react";

export default memo(function ForestRoadWrapper() {
  return (
    <>
      <div id="Press">
        <div id="Founder">
          <img
            className="rounded-tr-xl"
            src={
              "https://www.blackrock.com/blk-corp-assets/cache-1684348617000/images/media-bin/web/corporate/corporate-one/home/corp-sustainability-1.jpg"
            }
            alt="Forest with road"
          />
        </div>
        <div
          className="bg-black rounded-bl-xl  grid grid-cols-2 grid-rows-4 "
          id="sector1"
        >
          <div className="bg-black h-[70px] sm:h-[20px] w-[auto] rounded-br-xl text-center col-span-2  ">
            <h1
              className={
                "  scroll-m-20 text-5xl font-bold tracking-tight text-amber-50 text-center px-4 mt-[10%] "
              }
            >
              Corporate sustainability
            </h1>

            <p
              className={
                " text-base sm:text-lg md:text-xl font-semibold text-amber-50 text-start m-5 break-words max-w-full"
              }
            >
              BlackRock’s purpose is to help more and more people experience
              financial well-being. In pursuit of our purpose, we focus on the
              long-term sustainability of BlackRock so we can continue to
              deliver value to our shareholders, employees, communities and
              clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
