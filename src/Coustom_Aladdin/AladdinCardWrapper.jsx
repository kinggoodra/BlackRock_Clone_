import { Button } from "@/components/ui/button";
import { Universal } from "@/UniversalClass/UniversalClass";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function AladdinCardWrapper() {
  console.log();
  return (
    <>
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 bg-amber-100">
        <div className="m-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Invest in Scale
          </h3>
          <p className="leading-7 font-mono [&:not(:first-child)]:mt-6">
            Whether you’re an asset manager,bank,insurer ,pension plan ,
            corporation,or ecosystem partner—a single unifide platform ,built by
            and for market pactitioners, will help wnsure that your organization
            keeps up with the continuous pace of change
          </p>
          <Link to="">
            <Button variant="link_" className="text-black cursor-pointer ">
              <ChevronRightIcon /> Learn more
            </Button>
          </Link>
        </div>
        <div>
          {Universal.indexesAladdin.Institutions.map((items, key) =>
            Universal.indexesAladdin.Institutions[2] != items &&
            Universal.indexesAladdin.Institutions[3] != items &&
            Universal.indexesAladdin.Institutions[7] != items ? (
              <Link key={key}>
                <ul className="m-6 inline font-mono leading-7 [&:not(:first-child)]:mt-6  text-center hover:underline">
                  <li>{items}</li>
                </ul>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </>
  );
});
