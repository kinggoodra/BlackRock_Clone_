import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";
import Press from "../Press";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Footer from "../Footer";
import DataValuePair from "./DataValuePair";
import NavBar from "../Newsroom/NavBar";

export default memo(function ID_1() {
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <Press
        BTNHidden={true}
        Ptag={true}
        Htag={false}
        SRC={
          " https://www.blackrock.com/blk-corp-assets/cache-1667338603000/images/media-bin/web/global/banner/blackrock-voting-choice-banner.webp"
        }
        PContent={
          "At BlackRock we are  committ to a future where every investor can have an easy and efficient option  to participate in the proxy voting process. "
        }
        HContent={"Empowering investor through  BlackRock voting Choice"}
      />
      <div className=" sm:w-[60%] pt-[50%] p-5 sm:pt-[10%]  bg-white text-black ">
        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
          Today, investor can choose from thsound of low-cost, high-quality
          investment fund across asset classes ans market. BlackRock believes
          that gerater choice should extend to proxy voting and is committed to
          a future whgere every investor can participate in the proxy voting
          process if they so choose.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
          <b>
            We launched BlackRock Voting Choosee in 2022 to make participation
            in the proxy voting process easier and more accessible for eligible
            client.
          </b>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
          BlackRock Voting Choice, an industry first and a proprietary offering,
          currently enables eligible clients to participate in the proxy voting
          process where legally and operationally viable.
        </p>
        <hr className="border-black mt-5" />
        <div className="mt-5">
          <img
            className="h-auto w-full "
            alt="BlackRock Voting Choice Q2 2024 AUM"
            src="https://www.blackrock.com/blk-corp-assets/cache-1740059821000/images/media-bin/web/global/charts/blackrock-voting-choice-q2-aum.webp"
          ></img>
          <small className="text-xs font-normal leading-5 inline-block ">
            Source: BlackRock. Client funds participating in BlackRock Voting
            Choice are as of December 31, 2024. Assets include index equity
            assets held in multi-asset fund of funds strategies.
          </small>
          <small className="text-xs font-normal leading-5 inline-block ">
            Note: Newly committed Voting Choice AUM includes pooled fund clients
            that have elected BlackRock Voting Choice options 1 or 3, separate
            account clients that have elected BlackRock Voting Choice options 2
            or 3, and shareholders in one of BlackRock’s largest ETFs that have
            elected to participate. Certain institutional pooled funds that
            implement Systematic Active Equity (SAE) strategies are also
            eligible for BlackRock Voting Choice but are not displayed in the
            chart. Eligible SAE institutional pooled funds and separate accounts
            amount to $145bn in eligible Voting Choice assets. All currency
            shown in USD.
          </small>

          <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
            Eligible clients can choose one of four options: <sup>1</sup>
          </p>
        </div>
        <div>
          <ol className="list-decimal mt-5">
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              <li>
                Client choose and implement their preferred voting policy{" "}
              </li>
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
              Clients in certain institutional pooled vehicles have the ability
              to apply their preferred voting policy to shares in the pooled
              fund reflecting the client’s proportional ownership of that fund.
              Clients either develop their own processes and policies to be
              implemented by an in-house team or contract directly with a
              third-party proxy advisor to develop and implement a custom
              policy.<sup>2</sup> The preferred voting policy, whether designed
              in-house by the client or a third-party, can be applied in a
              consistent way across a broader share of their overall portfolio
              allocation, using the client’s preferred proxy voting service
              provider and allowing the client to exercise a high degree of
              control over the decision-making process and the voting
              implementation.
            </p>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              <li>Client can direct votes </li>
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
              Separately managed account (SMA) clients have multiple options to
              direct votes. SMA clients can (i) authorize BlackRock to vote in
              accordance with BlackRock Investment Stewardship’s Benchmark
              voting policy, (ii) select a third-party voting policy offered
              through Voting Choice, (iii) utilize their custom voting policy,
              (iv) implement a voting policy based on their investment objects
              with the support of BlackRock Investment Stewardship<sup>3</sup> ,
              and/or (v) make specific voting decisions on the topics or at the
              companies that matter most to them after a voting policy is
              applied.<sup>4</sup>
            </p>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              <li>Clients choose form a slate of third-party policies</li>
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
              Clients in eligible institutional pooled vehicles and SMAs have
              the ability to select from a set of voting policies<sup>5</sup>{" "}
              from third-party proxy advisers the policy that best aligns with
              their views and preferences. BlackRock can then use its proxy
              voting infrastructure to cast votes based on the client’s selected
              voting policy.
            </p>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              <li>
                Clients rely on BlackRock’s informed judgmentfor all voting
                decisions
              </li>
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
              Clients have the choice to rely on BlackRock Investment
              Stewardship for all of their voting decisions. Electing to rely on
              BlackRock to exercise voting authority is itself a choice and a
              deliberate decision by the client to entrust BlackRock Investment
              Stewardship to vote in the client’s economic interests.
            </p>
          </ol>
        </div>
        <small className="text-xs font-normal leading-5 inline-block mt-5 ">
          <ol className="list-decimal">
            <li>
              Institutional SMA clients have the opportunity to vote eligible
              proxies for the companies in which they are invested. Investors in
              eligible institutional pooled vehicles will have the opportunity
              to direct voting on eligible proxies in eligible markets for
              companies held by the pooled vehicle. BlackRock will determine
              eligibility criteria under this program based upon, among other
              things, local market regulation and practice, cost considerations,
              operational risk and/or complexity, and financial considerations,
              including the decision to lend securities. Voting policies shall
              be consistent with applicable fiduciary standards.
            </li>
            <li>
              Client policies must seek voting outcomes consistent with the
              economic interests of the relevant pooled fund.
            </li>
            <li>
              Institutional clients in eligible SMAs will be supported in their
              design and implementation of their bespoke voting guidelines.
              BlackRock will engage with eligible institutional SMA clients to
              facilitate the design of proxy voting guidelines that align with
              their investment objectives which can then be implemented on
              BlackRock’s proxy voting infrastructure. There are recurring
              annual fees charged by proxy advisor vendors to implement custom
              voting guidelines.
            </li>
            <li>
              The ability to vote directly on the topics or at the companies
              that matter most is limited to SMAs who have selected the
              BlackRock Benchmark Voting Policy or policies offered through
              Institutional Shareholder Services. This ability is not available
              to clients in institutional pooled funds.
            </li>
            <li>
              Certain voting policies offered through Voting Choice will not be
              eligible for use for our Irish and UK funds with ESG
              characteristics, including index funds that track indices with ESG
              characteristics.
            </li>
          </ol>
        </small>
      </div>
      <DataValuePair/>
      <div className="m-1">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={"flex justify-center"}>
              Source
            </AccordionTrigger>
            <AccordionContent>
              <small className="text-xs font-sans leading-5 inline-block ">
                Source: BlackRock. Client funds participating in BlackRock
                Voting Choice are as of December 31, 2024. Assets include index
                equity assets held in multi-asset fund of funds strategies.
                Note: Newly committed Voting Choice AUM includes pooled fund
                clients that have elected BlackRock Voting Choice options 1 or
                3, separate account clients that have elected BlackRock Voting
                Choice options 2 or 3, and shareholders in one of BlackRock’s
                largest ETFs that have elected to participate. All currency
                shown in USD.
              </small>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className=" grid sm:grid-cols-3 gap-5 bg-gray-300 mt-1 p-5  ">
          <Drawer>
            <DrawerTrigger className="cursor-pointer rounded-none w-auto h-auto text-amber-50 bg-black p-5">
              BlackRock Voting Choice FAQs
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>BlackRock Voting Choice FAQs</DrawerTitle>
                <DrawerDescription>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>1. What is BlackRock Voting Choice</b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        BlackRock believes that greater choice should extend to
                        shareholding proxy voting and is committed to future
                        where every investor can participate in the proxy voting
                        process. Blackrock Voting Choice [sometimes known as
                        pass-through voting] provides eligible clients with more
                        opportunities to participate in the proxy voting process
                        where legally and operationally viable.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>
                          2. Which BlackRock product are in scope for Voting
                          Choice?
                        </b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        Voting Choice is currently available for eligible
                        clients invested in certain institutional pooled funds
                        in the U.S., UK, Ireland, and Canada that utilize equity
                        index investment strategies, as well as eligible clients
                        in certain institutional pooled funds in the U.S., UK,
                        and Canada that use systematic active equity (SAE)
                        strategies. Currently, this includes over 650 pooled
                        investment funds, including equity index funds and SAE
                        funds. In addition, institutional clients in separately
                        managed accounts (SMAs) continue to be eligible for
                        BlackRock Voting Choice regardless of their investment
                        strategies.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>
                          3.Dose BlackRock disclose names of Voting Choice
                          clients?
                        </b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        To protect clients’ confidentiality, BlackRock does not
                        disclose names of clients publicly without their
                        consent, including Voting Choice clients.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </DrawerDescription>
              </DrawerHeader>
              <Button className={"hidden"}></Button>
              <DrawerFooter>
                <DrawerClose>
                  <Button className="cursor-pointer rounded-none w-full bg-black ">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/*  */}
          <Drawer>
            <DrawerTrigger className="cursor-pointer rounded-none w-auto h-auto text-amber-50 bg-black p-5">
              BlackRock Voting Choice Policies
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className={"text-7xl"}>
                  BlackRock Voting Choice Policies
                </DrawerTitle>
                <DrawerDescription
                  className={"text-black max-h-[70vh] overflow-y-auto"}
                >
                  <div>
                    <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
                      We offr a wide range of Voting Choice policies through{" "}
                      <b className="underline cursor-pointer">
                        {" "}
                        Institutional Shareholder Services (ISS), Glass Lewis{" "}
                      </b>{" "}
                      and{" "}
                      <b className="underline cursor-pointer">
                        Egan-Jones.
                      </b>{" "}
                    </p>
                    <div className=" flex flex-row gap-5">
                      <div>
                        <b>ISS Policies</b>
                        <ol className="list-disc m-5 ">
                          <li>ISS Benchmark Policy</li>
                          <li>Sustainabillity Policy</li>
                          <li>Socially Responsiable Investment (SRI) Policy</li>
                          <li>Catholic Faith-Based Policy</li>
                          <li>Public Pension Fund Policy </li>
                          <li>Taft-Hartley Policy</li>
                          <li>Global Board-Aligned Policy</li>
                        </ol>
                      </div>
                      <div>
                        <b>Glass Lewis Policies</b>
                        <ol className="list-disc m-5 ">
                          <li>Glass Lewis Benchmark Policy</li>
                          <li>Climate Policy</li>
                          <li> ESG Policy</li>
                          <li>Catholic Policy</li>
                          <li>Public Pension Policy </li>
                          <li>Taft-Hartley Policy</li>
                          <li>Corporate Governance-Focused Policy</li>
                        </ol>
                      </div>
                      <div>
                        <b>Egan-Jones Policy</b>
                        <ol className="list-disc m-5 ">
                          <li>Egan-Jones Wealth-Focused Policy</li>
                          <li>Egan-Jones Standard Policy</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <Button className={"hidden"}></Button>
              <DrawerFooter>
                <DrawerClose className={"mt-auto "}>
                  <Button className="cursor-pointer rounded-none w-full bg-black ">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/*  */}
          <Drawer>
            <DrawerTrigger className="cursor-pointer rounded-none w-auto h-auto text-amber-50 bg-black p-5">
              U.S Retail Program
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className={"text-7xl"}>
                  <h3 className="scroll-m-20 text-2xl mt-5 font-bold tracking-tight">
                    U.S Retail Program
                  </h3>
                </DrawerTitle>
                <DrawerDescription
                  className={"text-black max-h-[75vh] overflow-y-auto"}
                >
                  <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
                    As part of our commitment to a future where every investor
                    can participate in the shareholder voting process, BlackRock
                    has expanded the Voting Choice program to eligible investors
                    through a U.S Retail Program. The program provides eligible
                    shareholder accounts with more opportunities to participate
                    in the proxy voting process. Three years from the launch of
                    BlackRock Voting Choice for institutional clients, the
                    expansion of the program to individual investors increases
                    eligible Voting Choice assets to $3.1 trillion<sup>3</sup>,
                    half of BlackRock’s index equity assets under management.
                  </p>
                  <h3 className="scroll-m-20 text-2xl mt-5 font-bold tracking-tight">
                    Frequently Asked Questions
                  </h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b> 1. What is BlackRock Voting Choice</b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        BlackRock Voting Choice is a proprietary offering
                        launched in January 2022 that provides eligible clients
                        with opportunities to participate in the proxy voting
                        process where legally and operationally viable. This
                        process is sometimes known as pass-through voting. As of
                        December 31, 2024, index equity clients representing
                        $679.3 billion in AUM were exercising BlackRock Voting
                        Choice. <sup>4</sup>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>
                          2. What is BlackRock offring under the U.S Retail
                          Program?
                        </b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        Under the BlackRock Voting Choice program for the U.S.
                        retail fund, eligible investors can select one of seven
                        third-party proxy voting policies available, in addition
                        to BlackRock Investment Stewardship’s benchmark U.S.
                        voting guidelines. Once a voting policy is selected, it
                        will be applied to the shareholder meetings of companies
                        held in the fund after a reasonable delay (subject to
                        certain exclusions), based on investors’ proportional
                        ownership of the fund. A pilot of the program was
                        launched in 2024, and the program is continuing in 2025.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>3. What is a proxy Voting policy </b>
                      </AccordionTrigger>
                      <AccordionContent
                        className={"text-black"}
                      ></AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>
                          4. Which voting policies are offered through BlackRock
                          Voting Choice U.S. Ratail Program?
                        </b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        <div>
                          <p className="leading-7 [&:not(:first-child)]:mt-1 font-normal">
                            BlackRock offers eligible investors in the
                            participating U.S. retail fund the ability to select
                            one of seven third-party policies, as well as the
                            option to continue to have their shares voted
                            according to the BlackRock Investment Stewardship’s
                            benchmark U.S. voting guidelines, offering eligible
                            investors a greater range of options to reflect
                            their investment goals and preferences in proxy
                            voting.{" "}
                          </p>
                          <b>
                            BlackRock Investment Stewardship Benchmark Policy:
                          </b>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className={"text-black"}>
                        <b>
                          5. Who will be eligible to participate in BlackRock
                          Voting Choice for the U.S.Retail Program?
                        </b>
                      </AccordionTrigger>
                      <AccordionContent className={"text-black"}>
                        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
                          Any eligible U.S. Pilot Fund investor that receives
                          fund proxies through email or mail will receive the
                          proxy voting policy survey. If an advisor receives
                          fund proxies through email or mail on behalf of their
                          client, the advisor will receive the survey and will
                          be able to make the voting policy selection on behalf
                          of their client. End investors of advisors who have
                          voting discretion, as per the advisor agreement (i.e.,
                          most non-discretionary accounts) will also receive the
                          survey.
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
                          Investors that receive U.S. Pilot Fund proxy
                          information through a proxy vendor such as
                          Institutional Shareholder Services (ISS), Glass Lewis,
                          or Broadridge Proxy Edge will not receive the survey
                          and will not be eligible to participate in the U.S.
                          Pilot Program. This includes most institutional
                          clients, and certain advisors; or investors who do not
                          have voting discretion (i.e., most advised
                          discretionary accounts).
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </DrawerDescription>
              </DrawerHeader>
              <Button className={"hidden"}></Button>
              <DrawerFooter>
                <DrawerClose>
                  <Button className="cursor-pointer rounded-none w-full bg-black ">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <small className="text-xs font-normal leading-4  inline-block ">
            <sup>3</sup>Source: BlackRock. As of December 31, 2024. Assets
            include index equity assets held in multi-asset fund of funds
            strategies.
            <br />
            <br />
            <sup>4</sup> Source: BlackRock Client funds participating in
            BlackRock Voting Choice are as of December 31, 2024. Assets include
            index equity assets held in multi-asset fund of funds strategies.
          </small>
        </div>
        <div className="w-full   h-auto p-5  grid grid-rows-4">
          <div className="self-center ">
            <img
              src="https://www.blackrock.com/blk-corp-assets/cache-1743594735000/include/common/images/quote_mark_top_black.svg"
              alt="Quotation start"
            />
          </div>
          <div className="">
            <p className="leading-5 [&:not(:first-child)]: font-bold">
              BlackRock has seen growing interest from clients who wish to
              exercise their proxy voting rights as long-term owners of publicly
              traded companies. In response, BlackRock pioneered an industry
              movement by launching Voting Choice, making proxy voting easier
              and more accessible for eligible clients. For the many clients who
              choose to entrust BlackRock with voting on their behalf, we remain
              steadfast in our focus on their long-term financial interests,
              consistent with our fiduciary duty as an asset manager.
            </p>
          </div>
          <div className="self-center">
            <img
              src="https://www.blackrock.com/blk-corp-assets/cache-1743594735000/include/common/images/quote_mark_top_black.svg"
              alt="Quotation start"
            />
          </div>
          <div className="">
<b>-Joud Abdel Majeid-</b>
            <p className="leading-5 [&:not(:first-child)]: font-normal">
Global Head of  BlackRock Investment Stewardship

            </p>
          </div>
        </div>
      </div>
      <Footer margin={"100"} img={"/src/blackrock.svg "} />
      
    </>
  );
});
