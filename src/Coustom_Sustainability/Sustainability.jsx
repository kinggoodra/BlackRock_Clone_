import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import ForestRoadWrapper from "./ForestRoadWrapper";
import Para_Content from "./Para_Content";
import BodyTabs from "./BodyTabs";
import Footer from "@/Coustom_Home/Footer";
import Shareholders from "./Shareholders";
import Communities from "./Communities";
import Employees from "./Employees";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function Sustainability() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <ForestRoadWrapper />
      <Para_Content />
      <BodyTabs
        Tab1={"Shareholders"}
        Tab1Component={<Shareholders />}
        Tab2={"Employees"}
        Tab2Component={<Employees />}
        Tab3={"Communities"}
        Tab3Component={<Communities />}
      />
      <Footer margin={"5"} img={"/src/blackrock.svg "} />
    </>
  );
});
