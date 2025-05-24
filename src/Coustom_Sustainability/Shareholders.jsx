import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import ADDITIONAL_RESOURCES from "./ADDITIONAL_RESOURCES";

export default memo(function Shareholders() {
  return (
    <>
      <div className="p-10 sm:w-[60%] flex flex-col justify-start">
        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">
          {" "}
          We implement effective corporate governance{" "}
        </h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          BlackRock believes that a strong corporate governance framework is
          critical for running a sustainable business. Our corporaate governance
          framework is a set of principles,guidelines and practices that support
          consistent fincial performance and long-term value creation for our
          shareholders.{" "}
        </p>
        <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> <b>Corporate governance</b>
          </Button>
        </div>

        <hr className="border-[1px] border-black mt-10 " />
        <h2 className="scroll-m-20 text-black mt-20 text-2xl font-semibold tracking-tight first:mt-0">
          Corporate sustainability disclosures
        </h2>
        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          Climate Reporting - Aligned with the TCFD Framework
        </p>

        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          2023 Sustainability Disclosure (SASB-aligned){" "}
        </p>

        <h2 className="scroll-m-20 text-black mt-20 text-2xl font-semibold tracking-tight first:mt-0">
          Other disclosures
        </h2>

        <p
          className={
            " text-lg   cursor-pointer underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href=""></a>Operating Principles for impact Management Disclosure
        </p>

        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href=""></a>Proxy statement{" "}
        </p>

        <p
          className={
            " text-lg  cursor-pointer  underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href=""></a>SFDR Principal Adverser Sustainability Impact
          Statement-BAMIL
        </p>
        <p
          className={
            " text-lg   cursor-pointer underline underline-offset-8 font-bold text-black text-start mt-5 break-words max-w-full"
          }
        >
          <a href=""></a>SFDR Sustainability Risk Statement
        </p>

        <h2 className="scroll-m-20 text-black mt-20 text-2xl font-semibold tracking-tight first:mt-0">
          Spotlight on Board Diversity at BlackRock
        </h2>

        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          BlackRock and its Board of Directors believe diversity in the
          boardroom is critical to the success of BlackRock and its ability to
          create long-term value for our shareholders. In our experience,
          greater diversity in the boardroom contributes to more robust
          discussions and more innovative and resilient decisions. Over time,
          greater diversity in the boardroom can also promote greater diversity
          and resilience in the leadership team, and the workforce more broadly.
          Highly qualified, engaged directors with professional characteristics
          relevant to our business enhance the ability of the Board to add value
          and be the voice of shareholders in Board discussions. The Board has
          and will continue to take into consideration diversity in gender,
          race/ethnicity, age, career experience, sexual orientation and
          nationality – as well as diversity of mind when considering Director
          candidates. The diverse backgrounds of our individual Directors help
          the Board better oversee BlackRock’s management and operations and
          assess risk and opportunities for the Company’s business model from a
          variety of perspectives. BlackRock’s commitment to Board diversity
          enhances the Board’s involvement in our Company’s multi-faceted
          long-term strategy and inspires deeper engagement with management,
          employees and clients around the world.
        </p>

        <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon />
            Board diversity at BlackRock
          </Button>
        </div>
        <h3 className="scroll-m-20 text-xl mt-10 font-bold tracking-tight">
          We are committed to delivering long-term fincial performance
        </h3>

        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          By focusing on the key elements of our business that we can control,
          we look to generate differentiated and sustainable organic growth, and
          demonstrate the benefits of scale through operating leverage while
          re-investing in our business for future growth. In addition, we are
          committed to returning excess cash to shareholders through a
          consistent capital management strategy.
        </p>
        <h2 className="scroll-m-20 text-black mt-20 text-5xl font-bold tracking-tight first:mt-0">
          Total return since BlackRock’s IPO
        </h2>

        <img
          src="https://www.blackrock.com/blk-corp-assets/cache-1738586127000/images/media-bin/web/global/charts/total-return-blackrock-ipo-chart-updated.webp"
          alt="Chart image of Total return since BlackRock's IPO"
        />
        <small className="text-xs font-normal mt-1 leading-none">
          Source: S&P Global. The performance graph is not necessarily
          indicative of future investment performance.
        </small>
        <p
          className={
            " text-md font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          Over the past five years, we delivered 57% in total return for
          shareholders. And we delivered 7,700% since we went public in 1999.
        </p>

        
       <ADDITIONAL_RESOURCES/>
      </div>
    </>
  );
});
