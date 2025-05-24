import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";

export default memo(function DiscoverCta() {
  return (
    <>
      <div className="p-10 bg-black ">
        <div className="sm:w-[60%] text-white">
          <h2 className="scroll-m-20  pt-15 text-6xl font-semibold tracking-tight first:mt-0">
            Discover
          </h2>
          <br />
          <p>
            {" "}
            It’s a library, a record, a repository—the content hub. Discover
            more news, insights & opinions, client stories, and resources from
            Aladdin®, Aladdin Wealth™ and eFront®.
          </p>
          <br />
          <p>Read, watch, or listen.</p>
          <br />
          <Link to={""}>
            <Button
              variant="secondary"
              className=" rounded-none cursor-pointer w-[50%] text-black bg-white hover:text-white hover:bg-black "
            >
              <ChevronRightIcon /> Subscribe to Update
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
});
