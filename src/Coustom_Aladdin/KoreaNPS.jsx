import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function KoreaNPS({ H2Tag, BtNText, to }) {
  return (
    <>
      <div className="w-full h-auto grid grid-cols-1 mt-1 bg-black sm:mt-10">
        <div className="text-center">
          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold text-amber-50 tracking-tight first:mt-0">
            {H2Tag}
          </h2>
          <Link to={to}>
            <Button variant="link_" className="text-white cursor-pointer m-5">
              <ChevronRightIcon /> {BtNText}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
});
