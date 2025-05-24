import { memo } from "react";
import Navitems from "./Coustom_Home/Navitems";
import SVGS from "./SVGS";
import { Universal } from "./UniversalClass/UniversalClass";
import NavLinks from "./Coustom_Home/NavLinks";
import HCard_Our from "./Coustom_OurCompany/HCard_Our";
import Transcript from "./Coustom_Home/Transcript";
import Teaser from "./Coustom_Home/Teaser";
import Footer from "./Coustom_Home/Footer";
import Press from "./Coustom_Home/Press";
import Sustainability from "./Coustom_Sustainability/Sustainability";
import NavBar from "./Coustom_Home/Newsroom/NavBar";

export default memo(function OurCompany() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <br />
      <Press
        NavigatePath={"/OurCompany/id:1"}
        Ptag={true}
        Htag={false}
        SRC={
          "https://www.blackrock.com/blk-corp-assets/cache-1743412648000/images/media-bin/web/global/banner/larry-fink-hp-hero-2025.webp"
        }
        PContent={
          "In his 2025 Chairman’s Letter to Investors, Larry Fink shares howour thinking on retirement can be reshaped, and how expanding access to capital markets can help build a more prosperous futurefor more people."
        }
        HContent={"Larry Fink on economic growth and prosperity"}
      />
      <br />
      <HCard_Our CardsId={"/OurCompany/Card/"} />
      <br />
      <Transcript
        url={"./src/Coustom_Home/Investor_Day.mp4"}
        heading={"About BlackRock"}
        paragraph={Universal.paragraph.Transcript}
        to={`corporate/${Object.keys(Universal.indexes)[5]}/${Object.values(Universal.indexes["About Us"])[0]}` }

      />
      <br />
      <Teaser
        SetImg={true}
        heading1={Universal.SubNavLink[2]}
        heading2={Universal.indexes.Insights[1]}
        paragraph1={Universal.paragraph.Teaser_[0]}
        paragraph2={Universal.paragraph.Teaser_[1]}
      />
      <Footer margin={"50px"} img={"./src/blackrock.svg "} />
    </>
  );
});
