import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default memo(function WhatWeDo({_WhatWeDofnc}) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
useEffect(()=>{
  _WhatWeDofnc(inView)
},[inView])
  

    return<>
     <div id="What we do" ref={ref} className="m-25"></div>
      <div className="grid  sm:grid-cols-2  p-5 gap-5">
        <img
          src="https://www.blackrock.com/blk-corp-assets/cache-1634321875000/images/media-bin/web/global/banner/financial-security-au.webp"
          alt="Elderly couple shares a kiss under an umbrella"
          className="sm:order-1"
        />
        <div className="sm:ml-15 sm:order-2  sm:p-15">
          <h2 className="scroll-m-20 text-black pb-2 text-5xl font-bold tracking-tight first:mt-0">
            Fincial well-being
          </h2>
          <p className="text-black text-start">
            We help millions of people invest to build savings that serve them
            throughout their lives. As it becomes harder to save for goals like
            retirement, we help more people invest for their future.
          </p>
        </div>

        {/*  */}

        <img
          className="sm:order-4"
          src="https://www.blackrock.com/blk-corp-assets/cache-1634321875000/images/media-bin/web/global/banner/investment-access-au.webp"
          alt="BlackRock employees collaborating and channeling innovative energy at our global hackathon event."
        />
        <div className="sm:ml-0  sm:order-3 sm:p-15">
          <h2 className="scroll-m-20 text-black pb-2 text-5xl font-bold tracking-tight first:mt-0">
            Investment access
          </h2>
          <p className="text-black ">
            We make investing easier and more affordable. How can we use our
            expertise to help more and more people invest?
          </p>
          <div className=" w-full   text-center  mt-5">
            <Link to={""}>
              <Button
                variant="secondary"
                className=" rounded-none cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
              >
                <ChevronRightIcon /> Investing with iShare
              </Button>
            </Link>
          </div>
        </div>
        {/*  */}
        <img
          className="sm:order-5"
          src="https://www.blackrock.com/blk-corp-assets/cache-1634321875000/images/media-bin/web/global/banner/sustainable-outcomes-au.webp"
          alt="A child wearing a rain jacket observing a a plant with its root inside a mason jar"
        />
        <div className="sm:ml-auto sm:order-6 sm:p-15">
          <h2 className="scroll-m-20 text-black pb-2 text-5xl font-bold tracking-tight first:mt-0">
            Acting as fiduciary
          </h2>
          <p className="text-black text-start">
            Our investment approach is informed by three principles: we start by
            understanding the client’s investment objectives; we seek the best
            risk-adjusted returns within the scope of the mandate they give us;
            and we underpin our work with research, data, and analytics. We
            apply those same principles to sustainability and the low-carbon
            transition.
          </p>
          <div className=" w-full   text-center mt-5  ">
            <Link to={""}>
              <Button
                variant="secondary"
                className=" rounded-none cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
              >
                <ChevronRightIcon /> Explore sustainability at BlackRock
              </Button>
            </Link>
          </div>
        </div>
        {/*  */}
        <img
          className="sm:order-8"
          src="https://www.blackrock.com/blk-corp-assets/cache-1634321875000/images/media-bin/web/global/banner/inclusive-economies-au.webp"
          alt="A man wearing a face shield and mask"
        />
        <div className="sm:ml-auto sm:order-7 sm:p-15">
          <h2 className="scroll-m-20 text-black pb-2 text-5xl font-bold tracking-tight first:mt-0">
            Resilient economies
          </h2>
          <p className="text-black text-start">
            Our purpose is to help more and more people experience financial
            well-being. In addition to offering our clients choice to meet their
            investment goals, we also work to bring economic opportunities to
            more people through the BlackRock Foundation and our employee
            engagement programs.
          </p>
        </div>
      </div>
    </>
})