import { memo } from "react";
import Press from "../Press";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";
import Sticky from "./Sticky";
import NavBar from "../Newsroom/NavBar";

export default memo(function LarryFinkLetter() {
  return (
    <>
      <div>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />


        <Press Ptag={false} Htag={true} BTNHidden={true} SRC={
          "https://www.blackrock.com/blk-corp-assets/cache-1743412648000/images/media-bin/web/global/banner/larry-fink-hp-hero-2025.webp"
        }
        HContent={"Larry Fink’s 2025 Annual Chairman’s Letter to Investors"}
        />
        <br />
        <Sticky />
      </div>
      
    </>
  );
});
