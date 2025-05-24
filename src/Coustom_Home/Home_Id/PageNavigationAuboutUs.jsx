import { memo, useEffect, useState } from "react";
import WhatWeDo from "../WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Footer from "../Footer";
import WhoWeServe from "./WhoWeServe";
export default memo(function PageNavigationAuboutUs() {
  const [_WhatWeDo, Set_WhatWeDo] = useState(false);
  const [_WhoWeAre, Set_WhoWeAre] = useState(false);
  const [_WhoWeServe, Set_WhoWeServe] = useState(false);
  function _WhatWeDofnc(_WhatWeDofnc) {
    Set_WhatWeDo(_WhatWeDofnc);
  }
  function _WhoWeArefnc(_WhoWeArefnc) {
    Set_WhoWeAre(_WhoWeArefnc);
  }

  function _WhoWeServefnc(_WhoWeServefnc) {
    Set_WhoWeServe(_WhoWeServefnc);
  }

  return (
    <>
      <nav className="sticky top-0 z-10 bg-black">
        <div className="  p-5 h-full w-full sm:w-[50%] flex flex-row justify-around  text-accent">
          <a href="#What we do">
            <span
              className={`hover:underline underline-offset-8 ${
                _WhatWeDo
                  ? "bg-blue-300 text-black transition rounded-tr-sm rounded-tl-sm p-5"
                  : ""
              }
`}
            >
              <b>What we do</b>
            </span>
          </a>
          <a href="#Who we are">
            <span
              className={`hover:underline underline-offset-8    ${
                _WhoWeAre
                  ? "bg-blue-300 text-black transition rounded-tr-sm rounded-tl-sm p-5"
                  : ""
              } `}
            >
              <b>Who we are</b>
            </span>
          </a>
          <a href="#Who we serve">
            <span
              className={`hover:underline underline-offset-8 ${
                _WhoWeServe
                  ? "bg-blue-300 text-black transition rounded-tr-sm rounded-tl-sm p-5"
                  : ""
              } `}
            >
              <b>Who we serve</b>
            </span>
          </a>
        </div>
      </nav>
      <div className="p-10 sm:w-[50%]">
        <div className="flex flex-col">
          <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Our purpose is to help more and more people experience financial
            well-being. Together with our clients, we’re contributing to a more
            equitable and resilient world – today and for generations to come.
          </h4>
          <hr className="border-2 border-black mt-5 mb-5" />
          <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Our focus
          </h4>
        </div>
      </div>
      {/*  */}
      <WhatWeDo _WhatWeDofnc={_WhatWeDofnc} />
      <WhoWeAre _WhoWeArefnc={_WhoWeArefnc} />
      <WhoWeServe _WhoWeServefnc={_WhoWeServefnc} />
      <Footer margin={"5"} img={"/src/blackrock.svg "} />
    </>
  );
});
