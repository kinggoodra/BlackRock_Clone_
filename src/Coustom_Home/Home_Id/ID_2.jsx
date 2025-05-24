import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";
import HeroBannerID from "./HeroBannerID";
import HeadingID from "./HeadingID";
import ExploreMore from "./ExploreMore";
import Footer from "../Footer";
import ImageCtaID2 from "./ImageCtaID2";
import NavBar from "../Newsroom/NavBar";

export default memo(function ID_2() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <HeroBannerID />
      <HeadingID />
      <ExploreMore />
      <ImageCtaID2
        HTag={"              Building the transformation"}
        PTag={
          "              Mega forces, or structural shifts like the rise of artificial intelligence, are reshaping economies. Learn more about our big investment calls for 2025."
        }
        src={
          "https://www.blackrock.com/blk-corp-assets/cache-1741796415000/images/media-bin/web/corporate/corporate-one/insights/outlook-promo-march.webp"
        }
        alt={
          "An aerial photo shows a handful of cars driving over water on a multi-lane highway that diverges in three directions."
        }
        BtnText={"Read our outlook"}
      />
      <Footer margin={"5"} img={"/src/blackrock.svg "} />
    </>
  );
});
