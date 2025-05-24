import { memo } from "react";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import TopOfAladdin from "./TopOfAladdin";
import DownloadWhitePaper from "./DownloadWhitePaper";
import KeyPoints from "./KeyPoints";
import ImageCtaID2 from "@/Coustom_Home/Home_Id/ImageCtaID2";
import Transcript from "@/Coustom_Home/Transcript";
import InstitutionalInovation from "./InstitutionalInovation";
import MultiColumnTeaser from "./MultiColumnTeaser";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function AladdinStudio() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <Hero_Aladdin_ALL_Nav
        H2={"ALADDIN® STUDIO"}
        p={
          <>
            Empowering unique outcomes via our API-first approach across shared
            services and data. <br />
            <br /> Aladdin® Studio helps unlock data to uncover new insights,
            automate workflows, and accelerate innovation—all on a single
            platform built for the pace of change.
            <br /> <br /> Create, customize, and align by innovating on the
            Aladdin platform through Studio.
          </>
        }
        BTNText={"Book a meeting "}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1680625725000/images/aladdin/banners/windows-on-the%20-wall-hero-image.webp"
        }
      />
      <br />
      <DownloadWhitePaper P={"Learn about real-world applications for Studio in our white paper that covers our own principles for harnessing the power of citizen developers."} BTNText={"Read more"} />
      <br />
      <TopOfAladdin />
      <br />
      <KeyPoints />
      <br />
      <MultiColumnTeaser MultiColumnTeaser={Universal.MultiColumnTeaserKeyBenifit}/>
      <hr className="border-2 border-black mt-10" />
      <br />
      <ImageCtaID2
        HTag={"Technology for the pace of change "}
        PTag={
          "The Intelligent Shadow: a conversation between Jason Wild, Vice President, CEO Co-Innovation and Customer Engagement of Microsoft, and Lance Braunstein, Managing Director, Aladdin, on how BlackRock and Microsoft are continuously redefining fintech through a solid foundation, open innovation, and technology that’s built for the pace of change."
        }
        src={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1678460383000/images/aladdin/banners/audiocast-image.webp"
        }
        alt={"Lance Braunstein and Jason Wild"}
        BtnText={"Listen Now "}
        BG={false}
      />
      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/Preqin_2025_2270877_Captions-919.720p.wide.mp4"
        }
        heading={
          <>
            <h1 className="text-5xl">Is ecosystem an empty world?</h1>
          </>
        }
        paragraph={Universal.paragraph.TranscriptAladdin[2]}
      />

      <br />
      <InstitutionalInovation/>
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
