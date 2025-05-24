import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import PressReleaseID0 from "@/Coustom_Home/Home_Id/PressReleaseID0";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function SumitamAdopts() {
  return (
    <>

            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <PressReleaseID0
        H1Tag={
          "Sumitomo Mitsui Trust Asset Management Adopts BlackRock's Aladdin Platform to Enhance and  Optimize Asset Management "
        }
      />
      <div className="p-10">
        <>
          <b>Tokyo, February 12, 2025 —</b> Sumitomo Mitsui Trust Asset
          Management (SuMiTAM), a consolidated subsidiary of Sumitomo Mitsui
          Trust Group, Inc., has decided to adopt BlackRock’s Aladdin platform
          to unify and optimize its asset management processes. The platform
          will support the management of SuMiTAM’s US$620 billion of assets
          under management (AUM) and streamline the investment lifecycle across
          a broad range of asset classes.
          <br />
          <br />
          By leveraging Aladdin, SuMiTAM will be able to optimize processes and
          boost efficiencies for scalable growth. Not only will it leverage the
          platform’s core capabilities for order and execution management – such
          as rapid rebalancing and optimization of large-scale funds, compliance
          management, and electronic order placement and matching – but it will
          also incorporate the platform’s advanced risk management capabilities
          across the asset management life cycle, such as forward-dated
          benchmarks and corporate action instructions.
          <br />
          <br />
          <b>
            Takahiro Kobayashi, Executive Officer in charge of IT and Trading at
            SuMiTAM, commented:
          </b>{" "}
          "Aladdin will allow us to rapidly incorporate cutting-edge
          technologies with greater efficiency, enable us to optimize our asset
          management operations, strengthen our competitiveness, and continue
          delivering value to our clients. We are particularly keen to leverage
          its industry-leading capabilities, to expand our fiduciary capacity,
          drive further growth in the scale of our business, and accelerate
          bringing new offerings to market."
          <br />
          <br />
          <b>
            Akiyoshi Takeuchi, Head of Aladdin Client Business, Asia Pacific,
            BlackRock, stated:{" "}
          </b>{" "}
          "BlackRock has been refining its Aladdin platform for over 30 years
          and has continuously evolved it to support a wide range of asset
          classes. It can be used for both index and active management, and its
          hallmark is its end-to-end support of the entire investment operation,
          from the front office to post-trade processes. We are extremely proud
          to contribute to SuMiTAM’s transformation through Aladdin. This
          project will introduce Aladdin’s newest features to a growing number
          of Japanese asset managers and enable us to enhance the value we
          provide to our clients in Japan."
          <br />
          <br />
          -END-
        </>
        <br />
        <br />
        <>
          <h1 className="scroll-m-20 pt-10 font-semibold  tracking-tight text-2xl sm:text-5xl">
            About Sumitomo Mitsui Trust Asset Management
          </h1>
          <br />
          <br />
          As the leading asset manager in Japan, SuMiTAM offers a wide range of
          products, from index strategies to highly concentrated active
          strategies, and ESG and impact strategies. Being a Japan-based asset
          manager, its knowledge of the Japanese market set SuMiTAM apart from
          the competition. SuMiTAM believes on the ground research makes a real
          difference when making investment decisions, and SuMiTAM has one of
          the largest Japanese research teams in the industry in Tokyo. The
          quality and breadth of the research forms the basis of SuMiTAM’s
          strong capabilities in the market.
          <br />
          <br />
          <h1 className="scroll-m-20 pt-10 font-semibold   tracking-tight text-2xl sm:text-5xl">
            About BlackRock
          </h1>
          <br />
          <br />
          BlackRock’s purpose is to help more and more people experience
          financial well-being. As a fiduciary to investors and a provider of
          financial technology, we help millions of people build savings
          that serve them throughout their lives by making investing easier and
          more affordable. For additional information on BlackRock, please visit{" "}
          <a
            href="https://www.blackrock.com/corporate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <u>https://www.blackrock.com/corporate</u>
            </b>
          </a>
        </>
      </div>

      <br />
      <LearnAladdin H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
