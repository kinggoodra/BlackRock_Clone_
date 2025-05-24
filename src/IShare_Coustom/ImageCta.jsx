import { memo } from "react";

export default memo(function ImageCta() {
  return (
    <>
      <div className="bg-black h-80 w-full">
        <h1 className="scroll-m-20 pl-5 pt-5 text-amber-50 text-2xl font-bold tracking-tight lg:text-5xl">
          We’re here for you
        </h1>
        <p className=" leading-7 [&:not(:first-child)]:mt-6 pl-5 sm:w-150 text-amber-100">
          The money we manage is not our own. It belongs to many people – in
          many different locations – all trying to achieve their most important
          financial goals. We’re represented by 176 offices in 43 different
          locations, with local expertise strengthened by global service.
        </p>
      </div>
    </>
  );
});
