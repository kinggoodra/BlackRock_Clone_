import { memo } from "react";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import Award_Sotlight from "../Award_Sotlight";
import ImageCtaID2 from "@/Coustom_Home/Home_Id/ImageCtaID2";
import KoreaNPS from "../KoreaNPS";
import QuoteMark from "./QuoteMark";
import MultiColumnTeaser from "./MultiColumnTeaser";
import RelatedContents from "./RelatedContents";
import ViewPortfolio_Performance from "./ViewPortfolio_Performance";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Risk() {
  return (
    <>
      
            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <Hero_Aladdin_ALL_Nav
        H2={"ALADDIN® RISK"}
        p={
          "Aladdin Risk is the market-tested analytics engine of our tech--available as a stand-alone offering or as part of the Aladdin platform. It combines sophisticated risk analytics with quality-controlled data and highly scalable processing capabilities."
        }
        BTNText={"Book a meeting "}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1706196637000/images/aladdin/banners/hero-image.webp"
        }
      />

      <br />
      <QuoteMark/>
      <br />
      <MultiColumnTeaser MultiColumnTeaser={Universal.MultiColumnTeaser}/>
  
      <KoreaNPS H2Tag={"Uncover more with Aladdin®"}
      BtNText={"Click hear to download the Brochure"} to={"/discover/Korea'sNPS"} />
     
      <ImageCtaID2
          HTag={"New Mexico State Investment Council expands Aladdin Risk technology intregation  to include  eFront "}
          PTag={"Users of Aladdin technology are discovering the power of viewing all their assets, public and private, on a single platform. With easier reporting for greater transparency and the cost benefit of retiring other systems, learn why the New Mexico State Investment Office staff recommended the Council add eFront to their Aladdin Risk platform."}
          src={
"https://www.blackrock.com/blk-inst-c-assets/cache-1690458553000/images/aladdin/tiles/new-mexico.webp"
        }
          alt={"Kayak on the water"}
          BtnText={"Read more "}
          BG={false}
        />
<br />
<RelatedContents />
<br />
<MultiColumnTeaser MultiColumnTeaser={Universal.MultiColumnTeaser_}/>
<br />
      <ViewPortfolio_Performance/>
      <br />
<ImageCtaID2
          HTag={"Principles of design : platform & product "}
          PTag={"Sue Zheng, Managing Director & Tech Fellow and Afwa Kandawire, Managing Director & Global Head of Aladdin Platforms share more about the platform developments (cloud, scale, API), product engineering, the fundamental pillars of engineering at BlackRock and their career journeys."}
          src={
"https://www.blackrock.com/blk-inst-c-assets/cache-1706196729000/images/aladdin/tiles/afwa-and-sue.webp"
        }
          alt={"Afwa Kandawire and Sue Zheng"}
          BtnText={"Liste now "}
          BG={false}
        />
      <br />
      <Award_Sotlight AwardSpotlight={Universal.AwardSpotlight} />
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"}  />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
