import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import LearnAladdin from "../LearnAladdin";
import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import Transcript from "@/Coustom_Home/Transcript";
import PullQuote from "./PullQuote";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FooterAladdin from "../FooterAladdin";
import Hero_Aladdin_ALL_Nav from "../Hero_Aladdin_ALL_Nav";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function PREQIN() {
  return (
    <>
      
            <NavBar   UniversaL={Universal.SubNavLinkAladdin}
          indexes={Universal.indexesAladdin} img={"/src/Coustom_Aladdin/Aladdin.svg"} />

      <Hero_Aladdin_ALL_Nav
        H2={"BLACKROCK COMPLETES ACQUISITION OF PREQIN"}
        p={
          "BlackRock announced the successful completion of its acquisition of Preqin, a premier independent provider of private markets data. The transaction advances BlackRock’s private markets capabilities to serve clients’ whole portfolios."
        }
        BTNText={"Book ameeting with Aladdin"}
        ImgURL={
          "https://www.blackrock.com/blk-inst-c-assets/cache-1740132052000/images/aladdin/banners/hero-860x600-preqin-logo.webp"
        }
      />
      <Transcript
        url={
          "https://dwu7l6as21h3p.cloudfront.net/Preqin_2025_2270877_Captions-919.720p.wide.mp4"
        }
        heading={""}
        paragraph={
          "Rob Goldstein, BlackRock’s COO, and Mark O’Hare, Preqin’s Founder, discuss how Preqin advances BlackRock’s private market capabilities, enabling the delivery of integrated investment, technology and data solutions across clients’ whole portfolios."
        }
      />
      <PullQuote
        PTag={
          " BlackRock is a perpetual reinvention machine, evolving continuously to stay ahead of our clients’ rapidly changing needs. Today clients are seeking a ‘common language’ for investing that requires better data to drive investment decisions, manage risk, and construct portfolios. With Preqin, a part of BlackRock, we will seek to meet this need, accelerating clients’ ability to allocate to the growth of private markets and furthering our aspirations to deliver greater value across their whole portfolios."
        }
        B={"Rob Goldstein"}
        small={"BlackRock Chief Operating Officer"}
        BTNHidden={true}
      />
      <div className="flex flex-col sm:flex-row p-10 bg-yellow-300   gap-5 justify-between ">
        <div className=" hover:shadow-2xl hover:cursor-pointer hover:border-black hover:border-2   bg-accent p-10 sm:w-[50%]  flex flex-col justify-start">
          <h3
            className={
              "  font-bold text-2xl text-black  text-start  break-words max-w-full"
            }
          >
            Enable Your Whole Portfolio
          </h3>
          <p
            className={
              "  font-normal  pt-10  text-start  break-words max-w-full"
            }
          >
            Aladdin® is a tech platform that unifies the investment management
            process through a common data language. With a view of your whole
            portfolio—across public & private markets—it enables scale, provides
            insights, and supports business transformation.
          </p>
        </div>
        <div className=" hover:cursor-pointer hover:border-black hover:border-2  hover:shadow-2xl bg-accent p-10  sm:w-[50%] flex flex-col justify-start">
          <h3
            className={
              "  font-bold text-2xl text-black text-start  break-words max-w-full"
            }
          >
            Discover Our Private Captial and Hedg Fund Dataset{" "}
          </h3>
          <p
            className={
              "  font-normal   pt-10 text-start  break-words max-w-full"
            }
          >
            Access Preqin Pro, the industry’s most comprehensive private capital
            and hedge fund datasets and tools. Alternative assets professionals
            rely on it to make data-driven decisions throughout the entire
            investment lifecycle.
          </p>
        </div>
        <div className=" hover:cursor-pointer hover:border-black hover:border-2  hover:shadow-2xl bg-accent p-10  sm:w-[50%] flex flex-col justify-start">
          <h3
            className={
              "  font-bold text-2xl text-black text-start  break-words max-w-full"
            }
          >
            Learn More About Our Tech Platform for the Private Market{" "}
          </h3>
          <p
            className={
              "  font-normal   pt-10 text-start  break-words max-w-full"
            }
          >
            {" "}
            By integrating Preqin and eFront, BlackRock provides data, research,
            and investment tools for fundraising, deal sourcing, portfolio
            management, accounting, and performance—all in a unified platform.
          </p>
        </div>
      </div>
      <br />
      <div className="bg-black p-15">
        <Carousel>
          <CarouselContent>
            <CarouselItem className=" flex justify-center  ">
              <div >
                <b className="scroll-m-20  text-6xl sm:text-9xl font-bold text-amber-50 tracking-tight">
                  4,400
                </b>
                <br />
                <br />
                <b className="leading-20 text-6xl sm:text-9xl [&:not(:first-child)]: ml-auto text-amber-50">
                  Clients
                </b>
              </div>
            </CarouselItem>
            <CarouselItem className=" flex justify-center  ">
              <div>
                <b className="scroll-m-20 text-6xl sm:text-9xl font-bold text-amber-50 tracking-tight">
                  220,000
                </b>
                <br />
                <br />
                <b className="leading-20 text-6xl sm:text-9xl  [&:not(:first-child)]: ml-auto text-amber-50">
                  Users
                </b>
              </div>
            </CarouselItem>
            <CarouselItem className=" flex justify-center  ">
              <div>
                <b className="scroll-m-20 text-6xl sm:text-9xl font-bold text-amber-50 tracking-tight">
                  500
                </b>
                <br />
                <br />
                <b className="leading-20 text-6xl sm:text-9xl  [&:not(:first-child)]: ml-auto text-amber-50">
                  Full-time research
                </b>
              </div>
            </CarouselItem>
            <CarouselItem className=" flex justify-center   ">
              <div>
                <b className="scroll-m-20 text-6xl sm:text-9xl   font-bold text-amber-50 tracking-tight">
                  15.0
                </b>
                <br />
                <br />
                <b className="leading-20  text-6xl sm:text-9xl [&:not(:first-child)]: ml-auto text-amber-50">
                  Global offices
                </b>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <br />
      <LearnAladdin  H1Tag={"Get in touch to learn more about Aladdin®"} />
      <br />
      <FooterAladdin img={"/src/Coustom_Aladdin/Aladdin.svg"} />
    </>
  );
});
