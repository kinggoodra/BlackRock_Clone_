import "./App.css";
import Home from "./Home";
import Aladdin from "./Aladdin";
import IShare from "./IShare";
import OurCompany from "./OurCompany";
import { Route, Routes, useLocation } from "react-router-dom";
import LarryFinkLetter from "./Coustom_Home/Home_Id/LarryFinkLetter";
import About_Us from "./Coustom_Home/Home_Id/About_Us";
import { Universal } from "./UniversalClass/UniversalClass";
import Sustainability from "@/Coustom_Sustainability/Sustainability";
import InvestmentStewardship from "./Coustom_Insights/InvestmentStewardship";
import PREQIN from "./Coustom_Aladdin/Discover/PREQIN";
import Whole_Portfolio from "./Coustom_Aladdin/Platform/Whole_Portfolio";
import Risk from "./Coustom_Aladdin/Platform/Risk";
import Korea_NPS from "./Coustom_Aladdin/Discover/Korea_NPS";
import LearnAladdin from "./Coustom_Aladdin/LearnAladdin";
import AladdinStudio from "./Coustom_Aladdin/Platform/AladdinStudio";
import Audiocast from "./Coustom_Aladdin/Discover/Audiocast";
import AssetManagers from "./Coustom_Aladdin/Institution/AssetManagers";
import ID_0 from "./Coustom_Home/Home_Id/ID_0";
import ID_2 from "./Coustom_Home/Home_Id/ID_2";
import ID_1 from "./Coustom_Home/Home_Id/ID_1";
import ID_3 from "./Coustom_Home/Home_Id/ID_3";
import NewsRoom_Completes_Preqin_Acquisition from "./Coustom_Home/Newsroom/NewsRoom_Completes_Preqin_Acquisition";
import SumitamAdopts from "./Coustom_Aladdin/Discover/SumitamAdopts";
import LionTrust from "./Coustom_Aladdin/Discover/LionTrust";
import FormAll from "./FormAll";
import AIA_Announces from "./Coustom_Aladdin/Discover/AIA_Announces";
import Acquire_Preqin from "./Coustom_Aladdin/Discover/Acquire_Preqin";
import RoyalLondon from "./Coustom_Aladdin/Discover/RoyalLondon";
import Discover from "./Coustom_Aladdin/Discover/Discover";
export default function App() {

  
  return (
    <>
      <Routes>
        <Route path="/BlackRock_Clone_" element={<Home />} />
        <Route path="/IShare" element={<IShare />} />
        <Route path="/Aladdin" element={<Aladdin />} />
        <Route path="/OurCompany" element={<OurCompany />} />
        <Route path={`/${Universal.SubNavLink[2].toLocaleLowerCase()}/${Object.values(Universal.indexes)[2][0]}`} element={<Sustainability/>} />
        <Route path={`${Universal.SubNavLink[0]}/${Object.values(Universal.indexes)[0][1]}`} element={<InvestmentStewardship/>} />
        <Route path={`${Universal.SubNavLink[5]}/${Object.values(Universal.indexes)[5][0]}`} element={<About_Us/>} />
        <Route path={`${Universal.SubNavLink[1]}/larry-fink-annual-chairmans-letter`} element={<LarryFinkLetter/>} />
        <Route path={`${Universal.SubNavLink[3]}/${Object.values(Universal.indexes)[3][0]}/press-releases/article/corporate-one/press-releases/blackrock-agrees-to-acquire-hps`} element={<ID_0 />} />
        <Route path={`${Universal.SubNavLink[0]}/${Object.values(Universal.indexes)[0][1]}/BlackRock Voting Choice`} element={<ID_1/>} />
        <Route path={`${Universal.SubNavLink[0]}/${Object.values(Universal.indexes)[0][0]}/publications/mega-forces/demographic-divergence`} element={<ID_2/>} />
        <Route path={`${Universal.SubNavLink[0]}/${Object.values(Universal.indexes)[0][0]}/publications/weekly-commentary`} element={<ID_3/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[1]}/${Object.values(Universal.indexesAladdin)[1][3]}`} element={<PREQIN/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[1]}/${Object.values(Universal.indexesAladdin)[1][7]}`} element={<Whole_Portfolio/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[1]}/${Object.values(Universal.indexesAladdin)[1][8]}`} element={<Risk/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/nps-unveils-technology-platform-unified-by-blackrocks-aladdin-with-state-street-and-bny-specialized-investment-operations-services`} element={<Korea_NPS/>} />
        <Route path={`Aladdin/Stable Foundation`} element={<LearnAladdin/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[1]}/${Object.values(Universal.indexesAladdin)[1][5]}`} element={<AladdinStudio/>} />
        <Route path={`Aladdin/microsoft-audiocst`} element={<Audiocast/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[0]}/${Object.values(Universal.indexesAladdin)[0][0]}`} element={<AssetManagers/>} />
        <Route path={`Aladdin/${Universal.SubNavLink[3]}/${Object.values(Universal.indexes)[3][0]}/press-releases/article/corporate-one/press-releases/blackrock-completes-preqin-acquisition`} element={<NewsRoom_Completes_Preqin_Acquisition/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/sumitam-adopts-blackrocks-aladdin-platform`} element={<SumitamAdopts/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/liontrust-implements-data-solution-in-collaboration-with-blackrock-aladdin-and-bny`} element={<LionTrust/>} />
        <Route path={`Aladdin/eloqua-form/products/investment-tech-for-pensions`} element={<FormAll H1Tag={"Download the Case Study"} />} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/aia-announces-collaboration-with-blackrock-and-bny`} element={<AIA_Announces/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/blackrock-to-acquire-preqin`} element={<Acquire_Preqin/>} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}/royal-london-asset-management-press-release`} element={<RoyalLondon/>} />
        <Route path={`Aladdin/eloqua-form/products/morgan-stanley-audiocast-episode-pop-up-form`} element={<FormAll H1Tag={"Listen to Never Done Audiocast by  Aladdin®"} />} />
        <Route path={`Aladdin/eloqua-form/intesa-sanpaolo-audiocast-episode-form`} element={<FormAll H1Tag={"Intesa Sanpaolo S.p.A Accelerated innovation: elevating client service"} />} />
        <Route path={`Aladdin/eloqua-form/bnp-paribas-audiocast-episodes`} element={<FormAll H1Tag={"Listen to Never Done Audiocast by  Aladdin®"} />} />
        <Route path={`Aladdin/${Universal.SubNavLinkAladdin[2]}/${Object.values(Universal.indexesAladdin)[2][0]}`} element={<Discover/>} />
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}
        {/* <Route path={} element={} /> */}

      </Routes>
    </>
  );
}
