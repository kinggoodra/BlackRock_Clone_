import { memo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default memo(function MarketCommentary() {
  return (
    <>
      <div className="pt-20 sm:w-[60%] grid grid-cols-1 gap-5">
        <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
          Tearm premium returns
        </h3>
        <p className="text-md font-normal leading-6 text-black">
          U.S. 10-year breakdown , 2010-2025
        </p>
        <img
          src="https://www.blackrock.com/blk-corp-assets/cache-1745227561000/images/media-bin/web/global/charts/chart-of-the-week-20250421.svg"
          alt="The chart shows the recent uptick in the New York Fed’s estimate of the 10-year term premium – the extra compensation investors demand for the risk of holding long-term bonds – along with the risk-neutral yield and the combined total yield."
        />
        <small className="text-xs font-normal leading-4 inline-block ">
          Source: BlackRock Investment Institute and New York Federal Reserve,
          with data from LSEG Datastream, April 2025. Note: The chart shows the
          New York Fed’s estimate of the 10-year term premium – the extra
          compensation investors demand for the risk of holding long-term bonds
          – along with the risk-neutral yield. Both make up the total yield.
        </small>
        <p className="text-md font-normal leading-6 text-black">
          How will the role of U.S. Treasuries in portfolios evolve? It’s one of
          the big questions raised by the recent collision of two mega forces:
          geopolitical fragmentation and the future of finance. We argued in
          2021 that higher inflation and interest rates at a time of elevated
          debt create a “fragile equilibrium” for U.S. bonds, one vulnerable to
          shifts in investor confidence. We have long expected structurally
          higher interest rates. The recent unusual surge in Treasury yields as
          U.S. stocks and the dollar slid suggests a desire for more
          compensation for risk and brought that fragile equilibrium into sharp
          focus. See the chart. Predicting the end state of a transformation is
          near impossible, compounded now by unpredictable trade talks. Yet the
          policy-setting process will bump up against economic rules that put
          bounds on the realms of what’s possible. We track those rules, not
          each policy twist.
        </p>
        <p className="text-md font-normal leading-6 text-black">
          The U.S. runs large fiscal deficits and high debt, about 30% of which
          is held by foreign investors, Fed data show. An economic rule in play
          here? The current account deficit cannot be reduced without a
          corresponding fall in foreign financing. By pushing to reduce the
          trade deficit quickly, the U.S. will find it harder to finance its
          debt, especially if unpredictable tariff negotiations dent the
          confidence of foreign investors. That points to higher bond yields and
          debt servicing costs, upending budgetary arithmetic. Another rule?
          Global supply chains can evolve over time but cannot be rewired at
          speed without major disruption. Tariffs not only raise costs but can
          cut access to key inputs and potentially halt production. That risks a
          growth slowdown or recession with high inflation, just like in the
          pandemic. That limits any central bank response. In seeking to slash
          trade deficits fast, the U.S. will bump up against these economic
          rules. That seems to have already happened with the recent rapid
          Treasury selloff and tariff exemptions for electronics to avoid the
          most obvious supply chain disruptions.
        </p>
        <h1 className="scroll-m-20  pt-5 text-black text-5xl font-bold tracking-tight lg:text-5xl">
          Economic rules in play
        </h1>
        <p className="text-md font-normal leading-6 text-black">
          We see U.S. policy shifts adding to the structural transformation
          already underway. That transformation could have any number of
          outcomes in coming years. We can no longer extrapolate from past
          trends or rely on long-term assumptions to anchor portfolios. The
          distinction between tactical and strategic asset allocation is
          blurred. Instead, we need to constantly reassess the long-term
          trajectory and be dynamic with asset allocation as we learn more about
          the future state of the global system. Uncertainty about that future
          landscape can also incentivize non-U.S. investors to keep more money
          in local markets.
        </p>
        <p className="text-md font-normal leading-6 text-black">
          The binding effect of these economic rules on trade negotiations mean
          it will take time to uproot the current system. In the near term,
          today’s financial order remains the starting point. We focus on themes
          powering the global transformation. We still see the AI mega force
          driving returns, especially in the U.S. We find selective
          opportunities in Europe, for example in banks and defense. We prefer
          European credit and government bonds to the U.S. How the bloc responds
          to shifting global dynamics and tackles its structural challenges will
          be key.
        </p>
        <h1 className="scroll-m-20  pt-5 text-black text-5xl font-bold tracking-tight lg:text-5xl">
          Our bottom line
        </h1>
        <p className="text-md font-normal leading-6 text-black">
          Many different outcomes are feasible, so we navigate near-term
          uncertainty by tracking economic rules that will shape trade policy.
          We like U.S. stocks as a route to invest in AI and stay selective in
          Europe. We underweight U.S. Treasuries.
        </p>
        <h1 className="scroll-m-20  pt-5 text-black text-5xl font-bold tracking-tight lg:text-5xl">
          Market blackdrop
        </h1>
        <p className="text-md font-normal leading-6 text-black">
          U.S. stocks steadied after the historically big volatility since the
          April 2 announcement on U.S. tariffs. The S&P 500 was flat for the
          week and still down about 6% since then. Nvidia came under pressure
          after the U.S. announced export controls on one of the main chips it
          sells to China. U.S. Treasury yields fell on the week but are still up
          14 basis points to 4.34% since April 2, highlighting their reduced
          ballast role in portfolios. The U.S. dollar held near a three-year low
          against major currencies.
        </p>
        <p className="text-md font-normal leading-6 text-black">
          Global flash PMIs for both manufacturing and services activity will be
          in focus this week as investors look for any signs of the U.S.
          tariffs, policy uncertainty and risk asset selloff having an impact.
          The University of Michigan’s consumer sentiment survey will also be
          closely watched, especially given the surge in expected inflation
          among households as tariffs kick in. So far, higher household
          inflation expectations have not fed into market pricing of future
          inflation.
        </p>
      </div>
      <div className=" grid sm:grid-cols-2 gap-5 pt-10 p-5">
        <div className="z-10 sm:mt-20">
          <img
            src="https://www.blackrock.com/blk-corp-assets/cache-1745227561000/images/media-bin/web/global/charts/assest-in-review-20250421.svg"
            alt="The chart shows that gold is the best performing asset year to date among a selected group of assets, while U.S. equities are the worst."
          />
        </div>
        <div className=" justify-self-start ">
          <h3 className="scroll-m-20 text-4xl text-black font-bold  tracking-tight">
            Week ahead{" "}
          </h3>
          <div className="mt-10 sm:mt-15 flex flex-col gap-5">
            <div className="flex flex-row ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
              <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                April 22
              </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                Euro area consumer confidence
              </p>
            </div>
            <div className="flex flex-row  ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
              <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                April 23
              </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                Global flash PMIs
              </p>
            </div>
            <div className="flex flex-row ">
              <div className="w-0.5  bg-orange-400 mr-5"></div>
              <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
                April 25
              </h3>
            </div>
            <div className="ml-5">
              <p className="text-md font-normal leading-6 text-black">
                UK retail sales; University of Michigan consumer sentiment
              </p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={"flex justify-center"}>
              Source
            </AccordionTrigger>
            <AccordionContent>
              <hr className="border-[0.5px] m-5 border-black" />
              <small className="text-xs font-sans leading-4 inline-block ">
                <b>
                  {" "}
                  Past performance is not a reliable indicator of current or
                  future results. Indexes are unmanaged and do not account for
                  fees. It is not possible to invest directly in an index.D
                </b>
                Sources: BlackRock Investment Institute, with data from LSEG
                Datastream as of April 16, 2025. Notes: The two ends of the bars
                show the lowest and highest returns at any point year to date,
                and the dots represent current year-to-date returns. Emerging
                market (EM), high yield and global corporate investment grade
                (IG) returns are denominated in U.S. dollars, and the rest in
                local currencies. Indexes or prices used are: spot Brent crude,
                ICE U.S. Dollar Index (DXY), spot gold, MSCI Emerging Markets
                Index, MSCI Europe Index, LSEG Datastream 10-year benchmark
                government bond index (U.S., Germany and Italy), Bank of America
                Merrill Lynch Global High Yield Index, J.P. Morgan EMBI Index,
                Bank of America Merrill Lynch Global Broad Corporate Index and
                MSCI USA Index.
              </small>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className="text-md font-normal  leading-6 text-black">
        Read our past weekly market commentaries{" "}
        <b>
          <u>here</u>
        </b>
      </p>

      <p className="text-md font-normal leading-6 text-black"></p>
    </>
  );
});
