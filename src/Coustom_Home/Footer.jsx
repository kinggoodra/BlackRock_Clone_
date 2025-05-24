import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import { Link } from "react-router";

export default memo(function Footer({margin, img}) {
  return (
    <>
      <div className={`  w-full mt-[${margin}]  sm:mt-0  bg-black grid grid-cols-1 `}>
        <div className=" flex    flex-col sm:items-center sm:flex-row  ">
          <div className=" sm:w-100  sm:h-100  ml-10  text-start items-start   ">
            <SVGS  style="h-10  mt-10 ml-5" img={img} />
            <p className="  text-amber-50 p-5">
              As a global investment manager and fiduciary to our clients, our
              purpose at BlackRock is to help everyone experience financial
              well-being. Since 1999, we've been a leading provider of financial
              technology, and our clients turn to us for the solutions they need
              when planning for their most important goals.
            </p>
          </div>

          <div className=" w-[0] h-[0px]   sm:w-[2px] sm:h-[90%] bg-gray-400 mx-5"></div>

          <div className="text-white mb-[1%] ml-[10%] sm:ml-[1%] ">
            <h4 className="scroll-m-20 text-xl font-semibold text-orange-500 tracking-tight">
              Corporate
            </h4>
            <ul>
              {Universal.corporateLinks.map((index,key) => (
                <Link to=""  key={key}>
                  <li   className="scroll-m-20  text-md font-semibold leading-[2] cursor-pointer text-amber-50 tracking-tight hover:underline ">
                    {index}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="text-white mb-[1%] ml-[10%] sm:ml-[25%]">
            <h4 className="scroll-m-20 text-xl font-semibold text-orange-500 tracking-tight">
              Legal
            </h4>
            <ul>
              {Universal.LegalLinks.map((index,key) => (
                <Link to="" key={key}>
                  <li  className="scroll-m-20  text-md font-semibold leading-[2] cursor-pointer text-amber-50 tracking-tight hover:underline ">
                    {index}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
