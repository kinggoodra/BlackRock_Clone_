import { memo } from "react";

export default memo(function PressReleaseID0({H1Tag}) {
return<>
<div className="flex content-start p-15 gap-y-5 flex-col  bg-black">
        <small className="text-xm font-medium leading-none inline-block text-orange-400">
          PRESS RELEASES
        </small>
        <h1 className="scroll-m-20 pt-10 font-semibold text-amber-100  tracking-tight text-4xl sm:text-5xl">
{H1Tag}
        </h1>
      </div>
</>    
})