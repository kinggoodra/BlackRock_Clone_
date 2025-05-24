import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import PressReleaseID0 from "@/Coustom_Home/Home_Id/PressReleaseID0";
import Korea_NPSContent from "./Korea_NPSContent";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Korea_NPS() {
    return<>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <br />
            <PressReleaseID0 H1Tag={"Korea’s NPS unveils technology  platform unified by BlackRock’s Aladdin®"}/>
<br />
<Korea_NPSContent/>
            <br />
      <LearnAladdin />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
 
    </>
})