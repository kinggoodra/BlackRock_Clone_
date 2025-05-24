import ImageCtaID2 from "@/Coustom_Home/Home_Id/ImageCtaID2";
import Transcript from "@/Coustom_Home/Transcript";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Article from "../Article";
import Award_Sotlight from "../Award_Sotlight";
import FooterAladdin from "../FooterAladdin";
import LearnAladdin from "../LearnAladdin";
import FilterArticle from "./FilterArticle";

export default memo(function Access() {
    return<>
            <ImageCtaID2
               HTag={"Transform & grow "}
               PTag={"Portfolio management is continuously changing and it’s critical for asset managers to have the right tech to unlock opportunities, give them a competitive edge, help them grow, and differentiate. The Aladdin platform supports multi-asset portfolio construction and mandates, alongside custom benchmarks, model portfolios and target operating models."}
               src={"https://www.blackrock.com/blk-inst-c-assets/cache-1732541649000/images/aladdin/tiles/asset-managers-image-cta-1.webp"}
               alt={"A close-up of a solar panel"}
               BtnText={"Learn more about porfolio management "}
               BG={true}
             />
             <ImageCtaID2
        HTag={"Access your investment data ecosystem"}
        PTag={"Aladdin's data-as-a-service solution provides users with a single platform to access reliable, high-quality data to support all investment and operations workflows. With Aladdin technology, clients benefit from a managed data pipeline, aggregating investment data on a cloud-agnostic, scalable platform, ultimately reducing operational overhead and risk."}
        src={"https://www.blackrock.com/blk-inst-c-assets/cache-1737975836000/images/aladdin/tiles/unify-tab-image.webp"}
        alt={"A group of people walking on a white surface"}
        BtnText={"Learn more about Aladdin Data Cloud"}
        BG={true}
      />
      
            <Article AladdinCard2={Universal.DynamicArticleListExpand} BTNHidden={true} />
    <br />
      <div className="bg-black">
      <h1 className="scroll-m-20 text-4xl text-accent sm:w-[60%] font-normal tracking-tight p-5">
What dose scale mean for  asset managers?
      </h1>

      <Transcript
        url={
"https://dwu7l6as21h3p.cloudfront.net/BLQ_AssetManagers-842.720p.wide.mp4"
        }
        heading={""}
        paragraph={
"Hear perspectives from Meera Jessa, Co-Head of Aladdin Client Engagement in the Americas, and Victoria Kent, Head of Aladdin Client Engagement—as they discuss current conditions that asset managers face and how technology can support growth amidst volatility, uncertainty, and change."
        }
        BTNHidden={true}
      />
       <br />
      </div>
       <h1 className="scroll-m-20 text-4xl  sm:w-[60%] font-normal tracking-tight p-5">
Browse more resource
      </h1>
<FilterArticle Filterlist={Universal.DynamicArticleListFilter} BTNHidden={false} BTNList={Universal.BTNList[0]} />
<br />
<h1 className="scroll-m-20 text-4xl  sm:w-[60%] font-bold tracking-tight p-5">
AWARDS
      </h1>
<Award_Sotlight AwardSpotlight={Universal.AwardSpotlight.slice(2,4)}/>
    <LearnAladdin  H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin  img={"./src/Coustom_Aladdin/Aladdin.svg"}/>

    </>
    
})