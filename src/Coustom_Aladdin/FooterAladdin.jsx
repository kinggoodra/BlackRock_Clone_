import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default memo(function FooterAladdin({img}) {
  
  return (
    <>
      <div className=" hidden sm:block  sm:w-[65%] ">
        <SVGS style={"ml-10  h-full"} img={img} />
        <footer className="grid  grid-cols-4 m-5    ">
          {Object.keys(Universal.indexesAladdin).map((indexnav, key) => (
            <div key={key}> 
              <h4 className="scroll-m-20 text-lg font-normal tracking-tight max-w-max">
                {indexnav}
              </h4>
            </div>
          ))}
          <span>
            {Object.values(Universal.indexesAladdin.Institutions).map(
              (index, key) => (
                <ul key={key}>
                  <Link>
                    <li className="leading-8 mt-5 ">{index}</li>
                  </Link>
                </ul>
              )
            )}
          </span>
          <span>
            {Object.values(Universal.indexesAladdin.Platform).map(
              (index, key) => (
                <ul key={key}>
                  <Link>
                    <li className="leading-5 mt-5 ">{index}</li>
                  </Link>
                </ul>
              )
            )}
          </span>
          <span>
            {Object.values(Universal.indexesAladdin.Discover).map(
              (index, key) => (
                <ul key={key}>
                  <Link>
                    <li className="leading-8 mt-5 ">{index}</li>
                  </Link>
                </ul>
              )
            )}
          </span>
          <span>
            {Object.values(Universal.indexesAladdin["About Us"]).map(
              (index, key) => (
                <ul key={key}>
                  <Link>
                    <li className="leading-8 mt-5 ">{index}</li>
                  </Link>
                </ul>
              )
            )}
          </span>
        </footer>
      </div>
    </>
  );
});
