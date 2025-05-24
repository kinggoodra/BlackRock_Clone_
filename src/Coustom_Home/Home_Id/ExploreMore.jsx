import { memo } from "react";

export default memo(function ExploreMore() {
  return (
    <>
      <div className=" bg-gray-200 p-5 ">
        <div className="flex flex-col">
          <h2 className="scroll-m-20  border-4  rounded-tl-xl rounded-br-xl text-start text-3xl font-semibold tracking-tight first:mt-0">
            Explore more insights
          </h2>
          <div className="flex flex-col sm:flex-row mt-15   gap-10">
            <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h2 className="scroll-m-20    text-start text-3xl font-semibold tracking-tight first:mt-0">
                Financial resilience in a new economic regime
              </h2>
              <p className="leading-8 [&:not(:first-child)]:mt-5 font-normal text-md">
                We believe the choices companies make as they adapt to the new
                volatile regime and mega forces to be an important driver of
                their long-term financial performance. Learn more about what
                companies have told us about their plans to be well positioned.
              </p>
            </div>
            <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h2 className="scroll-m-20    text-start text-3xl font-semibold tracking-tight first:mt-0">
                Maping India’s growth story to mega forces{" "}
              </h2>
              <p className="leading-8 [&:not(:first-child)]:mt-5 font-normal text-md">
                India’s GDP growth,now outpacingthe emerging market market
                average and that of China’s,stand out. Learn more on how we map
                India’s growth story to the five mega forces we track.
              </p>
            </div>
            <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h2 className="scroll-m-20    text-start text-3xl font-semibold tracking-tight first:mt-0">
                Demographics limit U.S. growth outlook{" "}
              </h2>
              <p className="leading-8 [&:not(:first-child)]:mt-5 font-normal text-md">
                A key factor driving up prices in the U.S.? There aren't enough
                workers to comfortably maintain the current level of production.
                Read more.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
});
