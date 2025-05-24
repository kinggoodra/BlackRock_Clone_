import { memo } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
export default memo(function TableD3() {
return<>
     <div>
        <b className="ml-[70%]">Reason</b>
        <hr className="border-4 border-orange-400" />
        <table className="w-full  h-auto mt-1 ">
          <tr>
            <th className="text-start p-5">Tactical</th>
            <th className="w-[50%]"></th>
          </tr>
          <tr className="text-start  border-b-2 ">
            <td className=" p-5  ">
              <b>U.S.equities</b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                Policy uncertainty may weigh on growth and stocks in the near
                term. Yet we think U.S. equities can regain their global
                leadership. We think the underlying economy and corporate
                earnings are still solid and supported by mega forces such as
                AI.
              </p>
            </td>
          </tr>

          <tr className="text-start  border-b-2 ">
            <td className=" p-5  ">
              <b>Japanese equities </b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                We are overweight. Ongoing shareholder-friendly corporate
                reforms remain a positive. We prefer unhedged exposures given
                the yen’s potential strength during bouts of market stress.
              </p>
            </td>
          </tr>
          <tr className="text-start  ">
            <td className=" p-5  ">
              <b>Selective in fixed income </b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                Persistent deficits and sticky inflation in the U.S. make us
                underweight long-term U.S. Treasuries. We also prefer European
                credit – both investment grade and high yield – over the U.S. on
                more attractive spreads.
              </p>
            </td>
          </tr>
        </table>

        <hr className="border-4 border-yellow-400" />
        <table className="w-full  h-auto m-1 ">
          <tr>
            <th className="text-start p-5">Strategic</th>
            <th className="w-[50%]"></th>
          </tr>
          <tr className="text-start  border-b-2 ">
            <td className=" p-5  ">
              <b>Infrastructure equity and private credit </b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                We see opportunities in infrastructure equity due to attractive
                relative valuations and mega forces. We think private credit
                will earn lending share as banks retreat – and at attractive
                returns.
              </p>
            </td>
          </tr>

          <tr className="text-start  border-b-2 ">
            <td className=" p-5  ">
              <b>Fixed income granularity </b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                We prefer DM government bonds over investment grade credit given
                tight spreads. Within DM government bonds, we favor short- and
                medium-term maturities in the U.S., and UK gilts across
                maturities.
              </p>
            </td>
          </tr>
          <tr className="text-start   ">
            <td className=" p-5  ">
              <b>Equity granularity </b>
            </td>
            <td className="p-5">
              <p className="text-md font-normal leading-6 text-black">
                We favor emerging over developed markets yet get selective in
                both. EMs at the cross current of mega forces – like India and
                Saudi Arabia – offer opportunities. In DM, we like Japan as the
                return of inflation and corporate reforms brighten the outlook.
              </p>
            </td>
          </tr>
        </table>

        <div className="m-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className={"flex justify-center"}>
                Source
              </AccordionTrigger>
              <AccordionContent>
                <small className="text-xs font-sans leading-5 inline-block ">
                  Note: Views are from a U.S. dollar perspective, April 2025.
                  This material represents an assessment of the market
                  environment at a specific time and is not intended to be a
                  forecast of future events or a guarantee of future results.
                  This information should not be relied upon by the reader as
                  research or investment advice regarding any particular funds,
                  strategy or security.
                </small>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
</>
})