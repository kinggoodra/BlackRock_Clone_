import { memo } from "react";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import SVGS from "@/SVGS";
import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import { Universal } from "@/UniversalClass/UniversalClass";
import DiscoverCta from "./DiscoverCta";
import Article from "../Article";
import MultiColumnTeaser from "../Platform/MultiColumnTeaser";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import KoreaNPS from "../KoreaNPS";
import BodyTabFilterArtical from "./BodyTabFilterArtical";
import FilterArticle from "../Institution/FilterArticle";
import Transcript from "@/Coustom_Home/Transcript";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Discover() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <DiscoverCta />
      <div className="sm:w-[70%] p-5">
        <MultiColumnTeaser MultiColumnTeaser={Universal.Preqin} />
        <Link to={"http://localhost:5173/Aladdin/Platform/Preqin"}>
          <Button
            variant="secondary"
            className=" rounded-none cursor-pointer w-[50%] text-white bg-black hover:text-black hover:bg-white "
          >
            <ChevronRightIcon /> learn more
          </Button>
        </Link>
      </div>
      <br />

      <div className="bg-black">
        <KoreaNPS
          H2Tag={" "}
          BtNText={"Contact us to see how we can help in volatile time "}
          to={""}
        />
      </div>
      <br />
   <div className={`sm:block`}>
        <BodyTabFilterArtical
          Tab1={"All"}
          Tab2={"News"}
          Tab3={"Insights and Options"}
          Tab4={"Case Studies"}
          Tab5={"Audiocast"}
          Tab6={"Resource"}
        />
   </div>
  

      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/BSTAwards2023WinnerInterview-606.720p.wide.mp4"
        }
        heading={"Best Overall Technology Provider for 2023"}
        paragraph={
          "The Aladdin® platform won the Best Overall Technology Provider category in the 2023 Buy-Side Technology Awards. In this video, Kunal Khara discusses the transformation that the world is going through now and how megaforces including emerging technologies will affect investor behavior and ultimately drive innovation at Aladdin."
        }
        BTNHidden={false}
        to={""}
      />
      <br />
      <h2 className="scroll-m-20  p-5 text-3xl font-semibold  tracking-tight first:mt-0">
        SPOTLIGHT VOICES
          </h2>
        <MultiColumnTeaser MultiColumnTeaser={Universal.MultiColumnTeaserDiscover}/>
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
