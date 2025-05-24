import { useLocation } from "react-router";
import AladdinCardWrapper from "./Coustom_Aladdin/AladdinCardWrapper";
import AladdinHero from "./Coustom_Aladdin/AladdinHero";
import AladdinTechonology from "./Coustom_Aladdin/AladdinTechonology";
import Article from "./Coustom_Aladdin/Article";
import Award_Sotlight from "./Coustom_Aladdin/Award_Sotlight";
import FooterAladdin from "./Coustom_Aladdin/FooterAladdin";
import KoreaNPS from "./Coustom_Aladdin/KoreaNPS";
import LearnAladdin from "./Coustom_Aladdin/LearnAladdin";
import Podcasts from "./Coustom_Aladdin/Podcasts";

import Teaser from "./Coustom_Home/Teaser";
import Transcript from "./Coustom_Home/Transcript";
import { Universal } from "./UniversalClass/UniversalClass";
import NavBar from "./Coustom_Home/Newsroom/NavBar";

export default function Aladdin() {
  const location = useLocation();

  return (
    <>

    <div className=" grid grid-cols-[auto]">
      <NavBar
        UniversaL={Universal.SubNavLinkAladdin}
        indexes={Universal.indexesAladdin}
        img={"./src/Coustom_Aladdin/Aladdin.svg"}
      />

      <br />
      <AladdinHero />
      <br />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/Preqin_2025_2270877_Captions-919.720p.wide.mp4"
        }
        heading={"Preqin is now a part of BlackRock"}
        paragraph={Universal.paragraph.TranscriptAladdin[0]}
        to={`${location.pathname}/${Universal.SubNavLinkAladdin[1]}/${
          Object.values(Universal.indexesAladdin)[1][3]
        }`}
      />
      <br />
      {/*  */}
      <Teaser
        SetImg={false}
        heading1={"Whole Potfolio"}
        heading2={"Aladdin"}
        paragraph1={Universal.paragraph.Teaser_Aladdin[0]}
        paragraph2={Universal.paragraph.Teaser_Aladdin[1]}
        to={`${location.pathname}/Platform/Whole%20Portfolio`}
        to_={`${location.pathname}/Platform/Risk`}
      />
      {/*  */}
      <br />

      <div className="bg-black">
        <KoreaNPS
          H2Tag={"Korea's NPS goes live with BlackRock’s Aladdin technology"}
          BtNText={"Learn more"}
          to={`${location.pathname}/${Universal.SubNavLinkAladdin[2]}/${
            Object.values(Universal.indexesAladdin)[2][0]
          }/nps-unveils-technology-platform-unified-by-blackrocks-aladdin-with-state-street-and-bny-specialized-investment-operations-services`}
        />
      </div>
      <AladdinCardWrapper />
      <br />
      <AladdinTechonology
        hidden={true}
        AladdinTechonology={Universal.AladdinTechonology}
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
      <Podcasts
        H1={
          "In conversation with Ted Truscott CEO of Columbia Threadneedle Investmemnt"
        }
        H3={"Asset Management in the Era of Continuous Change"}
        P={
          " Ted Truscott,Chief Executive Officer, Columbia Threadneedle Investment, and Sudhir Nair, Global Head of Aladdin, discuss the evolution of asset management, clint expectations and how techonology—and AI in particular—is impacting investing management processes at large."
        }
        BTNText={"Listen to the Full episode"}
        SRC={"./src/Coustom_Aladdin/podcast.mp3"}
      />

      <Article AladdinCard2={Universal.AladdinCard2} BTNHidden={false} />
      <br />
      <Transcript
        backgroundimg={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1683199282000/images/aladdin/thumb/thumb-sizzle-reel-color-boom.jpg"
        }
        url={
          "https://dwu7l6as21h3p.cloudfront.net/AladdinSizzleV19-57.720p.wide.mp4"
        }
        heading={"Discover insights from the 1ALD community"}
        paragraph={
          "The Aladdin® Community, where the alchemy is not an accident"
        }
        to={`${Universal.SubNavLinkAladdin[2]}/${
          Object.values(Universal.indexesAladdin)[2][0]
        }`}
      />
      <br />
      <Award_Sotlight AwardSpotlight={Universal.AwardSpotlight} />
      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
    </div>
      <FooterAladdin img={"./src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
}
