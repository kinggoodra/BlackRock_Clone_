import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import Video from "./Videos";
import { Link } from "react-router";

export default memo(function Transcript({
  url,
  heading,
  paragraph,
  backgroundimg,
  to,
  BTNHidden
}) {
  return (
    <>
      <div id="Transcript" className="bg-black h-auto w-full  sm:mt-[0%] mt-[25%]  sm:h-108">
        <div className="  sm:grid sm:grid-cols-2 items-center text-start gap-1 p-5">
          <div>
            <h2 className="scroll-m-20 text-amber-50 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {heading}
            </h2>
            <br />
            <p className="text-amber-100 text-start">{paragraph}</p>
            <Link to={to}>
              <Button
                className={`cursor-pointer ${BTNHidden?"hidden":""} hover:bg-amber-50 hover:text-black  text-amber-50 mt-10 `}
              >
                <ChevronRightIcon /> Learn more
              </Button>
            </Link>
          </div>
          <div className="mt-5 sm:mt-0">
            <Video url={url} backgroundimg={backgroundimg} />
          </div>
        </div>
      </div>
    </>
  );
});
