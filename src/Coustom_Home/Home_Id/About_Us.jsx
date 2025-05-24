import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";

import WraperAboutUS from "./WraperAboutUS";
import PageNavigationAuboutUs from "./PageNavigationAuboutUs";
import NavBar from "../Newsroom/NavBar";

export default memo(function About_Us() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

     <WraperAboutUS/>
     <PageNavigationAuboutUs/>
    </>
  );
});
