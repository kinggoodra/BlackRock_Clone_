import { memo } from "react";
import Podcasts from "../Podcasts";
import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import AudiocastContent from "./AudiocastContent";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Audiocast() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />


      <Hero_Aladdin_ALL_Nav
        H2={
          <>
            <small className="text-sm font-medium leading-none hover:underline decoration-4 decoration-orange-400">
              MICROSOFT PARTNER STORY
            </small>
          </>
        }
        p={
          <>
            <h2 className="scroll-m-20  pb-2 text-4xl font-normal tracking-tight first:mt-0">
              TECHONOLOGY FOR THE PACE OF CHANCE
            </h2>
          </>
        }
        BTNText={""}
        BTNHidden={true}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1684860031000/images/aladdin/banners/image-2023-05-23-11-02-17-850.webp"
        }
      />

      <Podcasts
        H1={"Microsoft"}
        H3={""}
        P={
          "The Intelligent Shadow: a conversation between Jason Wild, Vice President, CEO Co-Innovation and Customer Engagement of Microsoft, and Lance Braunstein, Managing Director, Aladdin, on how two storied companies (BlackRock and Microsoft) are continuously redefining fintech through a solid foundation, open innovation, and technology that’s built for the pace of change."
        }
        BTNText={"Browse more episodes here"}
        SRC={
          "https://content.production.cdn.art19.com/validation=1746601746,1af14f75-a53a-5bf6-9ecf-7465a34e9b4c,GZSdeYiaSK1nKpQGOuJQQGdmZWw/episodes/e76fcb10-3a76-40d7-9ea4-f3e8fc66e5f4/9331ff238fd32c3c308c50ed9e5e9bd97bf4a12fffdcd891b92632457b7e5aaee1f10a1ff2632c618354bab0cef603a1253f6afa3b9859fe1d0d8b8186fcfa59/20230206%20BlackRock-Microsoft%20Aladdin%20Recording%20-%20SCTASK1163444%20-%20RD3.mp3"
        }
      />
      <AudiocastContent/>
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
