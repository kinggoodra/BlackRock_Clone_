import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";
import StandardBanner from "./StandardBanner";
import TranscriptID3 from "./TranscriptID3";
import CategoryNavigation from "./CategoryNavigation";

import Footer from "../Footer";
import ImageCatID3 from "./ImageCatID3";
import MeetAuthors from "./MeetAuthors";
import NavBar from "../Newsroom/NavBar";

export default memo(function ID_3() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <StandardBanner />
      <br />
      <TranscriptID3 />
      <br />
      <CategoryNavigation />
      <br />

      <ImageCatID3
        HTag={"On the go?"}
        SRC={
          "https://www.blackrock.com/blk-corp-assets/cache-1693228797000/images/media-bin/web/global/banner/bii-market-take-podcast-banner.webp"
        }
        Ptag={
          "Stay informed on our latest weekly Market take. Listen wherever you get your podcasts."
        }
        BTNText={"Subscribe to Apple podcast"}
      />
      <br />
      <MeetAuthors />
      <Footer margin={"5"} img={"/src/blackrock.svg "} />
    </>
  );
});
