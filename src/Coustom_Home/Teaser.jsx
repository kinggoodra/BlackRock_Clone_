import { Universal } from "@/UniversalClass/UniversalClass";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";
export default memo(function Teaser({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  SetImg,
  to,
  to_,
}) {
  return (
    <>
      <div id="Teaser" className="   ">
        <div className=" grid sm:grid-cols-2 p-5 gap-5 ">
          <div className=" p-5 top-0  grid  sm:grid-cols-3 bg-amber-100 rounded-tl-xl rounded-br-xl">
            {SetImg ? (
              <img
                className="h-15 w-15"
                src="./src/Coustom_Home/people.webp"
                alt="Corporate sustainability"
              />
            ) : (
              ""
            )}
            <div className="col-span-2  ">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {heading1}
              </h3>
              <p className="text-sm font-medium  leading-relaxed mt-5 mb-5 ">
                {paragraph1}
              </p>
              <Link to={to}>
                <Button variant="link_" className="text-black cursor-pointer">
                  <ChevronRightIcon /> Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div className=" p-5 top-0  grid sm:grid-cols-3 bg-amber-100 rounded-tl-xl rounded-br-xl">
            {SetImg ? (
              <img
                className="h-15 w-15"
                src="./src/Coustom_Home/lightbulb.webp"
                alt="Corporate sustainability"
              />
            ) : (
              ""
            )}
            <div className="col-span-2 ">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {heading2}
              </h3>
              <p className="text-sm font-medium  leading-relaxed mt-5 mb-5  ">
                {paragraph2}
              </p>
              <Link to={to_}>
                <Button variant="link_" className="text-black cursor-pointer">
                  <ChevronRightIcon /> Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
