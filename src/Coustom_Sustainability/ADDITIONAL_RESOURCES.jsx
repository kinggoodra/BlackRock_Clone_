import { memo } from "react";

export default memo(function ADDITIONAL_RESOURCES() {
    return<>
            <hr className="border-[1px] border-black mt-10 " />

     <h3 className="scroll-m-20 text-xl mt-10 font-bold tracking-tight">
        ADDITIONAL RESOURCES:
        </h3>


        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href="">Our fiduciary approach to sustainability</a>

        </p>
        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href="">Envormenttally sustainable business operations </a>
        </p>
        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href="">Explore our philanthropy and community engagment </a>
        </p>
    </>
})