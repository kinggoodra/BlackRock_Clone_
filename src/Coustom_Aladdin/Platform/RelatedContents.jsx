import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";

export default memo(function RelatedContents() {
  return (
    <>
      <div className="flex flex-col sm:flex-row place-content-between p-10">
        <div className="flex flex-col gap-5   max-w-md">
          <h2 className="scroll-m-20   text-2xl font-semibold  tracking-tight first:mt-0">
            Whole Portfolio View
          </h2>

          <p className={` text-start`}>
            {" "}
            Powered by BlackRock’s proprietary risk models, the Aladdin® Whole
            Portfolio View combines Aladdin Risk and eFront Insight to deliver
            dynamic data and analytics, sophisticated modeling capabilities, and
            flexible reporting as a managed service.
          </p>
          <Link to="">
            <Button className="cursor-pointer hover:bg-amber-50 hover:text-black  text-amber-50 mt-5 ">
              <ChevronRightIcon /> Learn more
            </Button>
          </Link>
        </div>
        <svg className=" bg-black w-auto h-0.5 sm:w-0.5 sm:h-auto  m-10"></svg>
        <div className="flex flex-col gap-5 max-w-md">
          <h2 className="scroll-m-20   text-2xl font-semibold  tracking-tight first:mt-0">
            Aladdin techonology
          </h2>

          <p className={` text-start`}>
            Stable Foundation. Open Innovation. Built for
          </p>
          <Link to="">
            <Button className="cursor-pointer hover:bg-amber-50 hover:text-black  text-amber-50 mt-5 ">
              <ChevronRightIcon /> Discover more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
});
