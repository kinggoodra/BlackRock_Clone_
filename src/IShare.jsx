import SVGS from "./SVGS";
import Footer from "./Coustom_Home/Footer";

import ImageCta from "./IShare_Coustom/ImageCta";
import SiteDirectory from "./IShare_Coustom/SiteDirectory";
import { Universal } from "./UniversalClass/UniversalClass";
import NavBar from "./Coustom_Home/Newsroom/NavBar";

export default function IShare() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <ImageCta  />
      <br />
      <SiteDirectory />
      <Footer margin={"20"} img={"./src/blackrock.svg "} />
    </>
  );
}
