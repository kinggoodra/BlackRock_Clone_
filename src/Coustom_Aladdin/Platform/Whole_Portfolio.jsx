import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import Transcript from "@/Coustom_Home/Transcript";
import AladdinTechonology from "../AladdinTechonology";
import ImageCtaID2 from "@/Coustom_Home/Home_Id/ImageCtaID2";

import Accordion_Platform from "./Accordion_Platform";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Whole_Portfolio() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <Hero_Aladdin_ALL_Nav
        H2={"GAIN A WHOLE POTFOLIO VIEW WITH ALADDIN"}
        p={
          "BlackRock’s Aladdin® solution helps asset managers and owners oversee their whole portfolio, end to end across private and public investments."
        }
        BTNText={"Contact us to learn more"}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1678104382000/images/aladdin/banners/whole-portfolio-banner-new.webp"
        }
        
      />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/Preqin_2025_2270877_Captions-919.720p.wide.mp4"
        }
        heading={"Preqin is now a part of BlackRock"}
        paragraph={Universal.paragraph.TranscriptAladdin[0]}
        to={`/${Object.keys(Universal.indexesAladdin)[2]}/${
          Object.values(Universal.indexesAladdin)[2][0]
        }`}
      />
      <div className="p-5">
        <h1 className="text-3xl font-bold text-black mb-5">
          Investor can now:
        </h1>
        <AladdinTechonology
          hidden={false}
          AladdinTechonology={Universal.AladdinTechonology_Whole_Portfolio}
        />
      </div>
      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/20200525_AWP_2522_MB-352.720p.wide.mp4"
        }
        heading={""}
        paragraph={
          "Play Video Transcript  See how Aladdin and eFront enable investors to manage portfolios across public and private asset classes on a single platform, providing a whole portfolio view."
        }
        BTNHidden={true}
      />
      <Accordion_Platform/>
      <ImageCtaID2
        HTag={
          "Clint story: The New Mexico State Investment Council expands Aladdin Risk partnership to include eFront"
        }
        PTag={
          "Users of Aladdin are discovering the power of viewing all their assets, public and private, on a single platform. With easier reporting for greater transparency and the cost benefit of retiring other systems, learn why the New Mexico State Investment Office staff recommended the Council add eFront to their Aladdin Risk platform."
        }
        src={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1638969080000/images/aladdin/banners/ala-sit-growth-building-hero.webp"
        }
        alt={"Building image"}
        BtnText={"Read the client story "}
      />
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
