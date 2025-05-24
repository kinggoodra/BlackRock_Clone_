import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import Transcript from "@/Coustom_Home/Transcript";
import MultiColumnTeaser from "../Platform/MultiColumnTeaser";
import KeyPoints from "../Platform/KeyPoints";
import Podcasts from "../Podcasts";
import KoreaNPS from "../KoreaNPS";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import BodyTabs from "@/Coustom_Sustainability/BodyTabs";
import Expand from "./Expand";
import Transform from "./Transform";
import Access from "./Access";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";


export default memo(function AssetManagers() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />


      <Hero_Aladdin_ALL_Nav
        H2={"INVESTMENT MANAGEMENT TECHNOLOGY THAT POWERS TRANSFORMATION"}
        p={
          "Today, the underlying tech stacks at asset management firms can either help or hinder expansion into new asset classes, finding organic and inorganic growth opportunities & achieving target operating models. Aladdin® unifies investment management—providing a common data language, enabling scale and transformation—across public and private markets."
        }
        BTNText={"Book a meeting"}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1732541742000/images/aladdin/banners/asset-managers-hero-image.webp"
        }
      />
      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/Preqin_2025_2270877_Captions-919.720p.wide.mp4"
        }
        heading={"Preqin is now a part of BlackRock"}
        paragraph={Universal.paragraph.TranscriptAladdin[0]}
        to={`${location.pathname}/${Object.keys(Universal.indexesAladdin)[2]}/${
          Object.values(Universal.indexesAladdin)[2][0]
        }`}
      />
      <br />
      <div className="bg-[#00a9e0] ">
        <MultiColumnTeaser
          MultiColumnTeaser={Universal.MulColTeaserAssetManage}
        />
      </div>

      <br />
      <KeyPoints />
      <br />
      <MultiColumnTeaser
        MultiColumnTeaser={Universal.MulColTeaserAssetManager}
      />
      <br />
      <Podcasts
        H1={"A Client story: Fisch Asset Management "}
        H3={"Strategic Innovation and Market Adaption"}
        P={
          " Torsten von Bartenwerffer, Chief Executive Officer, Fisch Asset Management, and René Villiger, Director, Aladdin Client Engagement, discuss the evolution of the asset management industry in Europe, Fisch’s strategic approach to growth and risk management."
        }
        BTNText={"Listen to the full episode "}
        SRC={
          "https://content.production.cdn.art19.com/validation=1746634555,923cedc9-7e12-50d4-a341-dd2f462aca84,TE-b3S0Hh12f0lcoAjSckTCHV10/episodes/fb1cabb0-a9b4-4f92-a109-b0851a6c4dfa/94b34f4ef12e423f0574fcd6c7c67e914d4de5cedb31911a8667e164c15759b6ce6d777bd853f5b1d8a8d8905bef02b9ad96ea6fa7407b027dd4f552e6fff200/Fisch%20Gated%20Audio.mp3"
        }
      />

      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/20241113_RLAM_V8-999.720p.wide.mp4"
        }
        heading={"Shaping Tomorrow with Techonology"}
        paragraph={Universal.paragraph.TranscriptAladdin[1]}
        to={`${location.pathname}/${Object.keys(Universal.indexesAladdin)[0]}/${
          Object.values(Universal.indexesAladdin)[0][0]
        }`}
      />
      <br />
      <div className="bg-yellow-300 ">
        <KoreaNPS
          H2Tag={
            <>
              <p className="">
                Differentiate, scale & growth with Aladdin®
              </p>
            </>
          }
          BtNText={
            <>
              <p className="">Download a brouchure</p>
            </>
          }
          to={``}
        />
      </div>
      <br />
      <h1 className="scroll-m-20 text-4xl sm:w-[60%] font-normal tracking-tight p-5">
        Aladdin unloks transformation and efficiency for all asset managers
      </h1>
      <br />
      <BodyTabs Tab1={"Expand"} Tab1Component={<Expand/>} Tab2={"Transform"} Tab2Component={<Transform/>} Tab3={"Access"} Tab3Component={<Access/>}/>
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
