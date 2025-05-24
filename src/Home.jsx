import Navitems from "./Coustom_Home/Navitems";
import NavLinks from "./Coustom_Home/NavLinks";
import SVGS from "./SVGS";
import Press from "./Coustom_Home/Press";
import Transcript from "./Coustom_Home/Transcript";
import Teaser from "./Coustom_Home/Teaser";
import Footer from "./Coustom_Home/Footer";
import { Universal } from "./UniversalClass/UniversalClass";
import HCard_Our from "./Coustom_OurCompany/HCard_Our";
import { Outlet } from "react-router-dom";
import NavBar from "./Coustom_Home/Newsroom/NavBar";
export default function Home() {
  return (
    <>

      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />
          <div className="  ">


    
      <Press
        NavigatePath={`${Universal.SubNavLink[1]}/larry-fink-annual-chairmans-letter`}
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
      
      <div className="my-4 w-full">

      <HCard_Our />
      </div>
      
      <Transcript
        url={"./src/Coustom_Home/Investor_Day.mp4"}
        heading={"About BlackRock"}
        paragraph={Universal.paragraph.Transcript}
        to={`${Universal.SubNavLink[5]}/${
          Object.values(Universal.indexes)[5][0]
        }`}
      />
<div className="my-4 w-full">

      <Teaser
        SetImg={true}
        heading1={Universal.SubNavLink[2]}
        heading2={Universal.indexes.Insights[1]}
        paragraph1={Universal.paragraph.Teaser_[0]}
        paragraph2={Universal.paragraph.Teaser_[1]}
        to_={`${Universal.SubNavLink[0]}/${
          Object.values(Universal.indexes)[0][1]
        }`}
        to={`/${Universal.SubNavLink[2].toLocaleLowerCase()}/${
          Object.values(Universal.indexes)[2][0]
        }`}
      />
</div>



      <Footer margin={"0"} img={"/src/blackrock.svg "} />
      </div>
    </>
  );
}
