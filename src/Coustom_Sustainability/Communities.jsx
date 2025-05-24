import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import ADDITIONAL_RESOURCES from "./ADDITIONAL_RESOURCES";
import ImageCtaID2 from "@/Coustom_Home/Home_Id/ImageCtaID2";

export default memo(function Communities() {
  return (
    <>
      <div className="  flex flex-col justify-start">
        <ImageCtaID2
          HTag={"We created positive socical impact by serving our communities"}
          PTag={
            "We partner with nonprofits through the BlackRock Foundation to help more people build financial security and benefit from the transition to a low-carbon future. And we support employee engagement programs to help our colleagues access the tools and opportunities they need to be drivers of local impact in their own communities. "
          }
          src={
            "https://www.blackrock.com/blk-corp-assets/cache-1682635667000/images/media-bin/web/corporate/corporate-one/home/sustainability-social-impact-cs.webp"
          }
          alt={"A man paints a mural"}
          BtnText={"Social impact"}
          BG={true}
        />
        <div className="sm:w-[60%]  ">
          <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">
            We manage the environmental impact of our own operations
          </h2>
          <p
            className={
              " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
            }
          >
            BlackRock pursues a corporate sustainability strategy that is
            focused on reducing greenhouse gas (GHG) emissions of BlackRock’s
            operations and increasing the efficiency of BlackRock’s operations,
            where possible. The firm will continue to focus on finding ways to
            leverage low-carbon solutions, such as renewable electricity to
            power its operations and using sustainable aviation fuel, where
            possible.
          </p>
          <div className=" mr-14 w-full    mt-5">
            <Button
              variant="secondary"
              className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
            >
              <ChevronRightIcon /> <b>Envormental sustainability</b>
            </Button>
          </div>
        </div>
        <ADDITIONAL_RESOURCES />
      </div>
    </>
  );
});
