import { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default memo(function Accordion_Platform() {
    return<>
    <div className=" p-10 sm:w-[70%]">
        <h1 className="text-3xl font-bold text-black mb-5">
          How can a whole portfolio view impact your investment managemnet
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="leading-7 [&:not(:first-child)]:mt-5  text-xl font-bold">
              Increased operational efficiency{" "}
            </AccordionTrigger>
            <AccordionContent className="text-black text-start">
              Dealing with separate teams, processes and data sets can be
              challenging and time-consuming. Having a single source for both
              your public and private markets data will save investors time and
              increase team operational efficiency.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="leading-7 [&:not(:first-child)]:mt-5  text-xl font-bold">
              Efficient allocation management{" "}
            </AccordionTrigger>
            <AccordionContent className="text-black text-start">
              Take advantage of market opportunities and protect against
              downside risks. A holistic view of your portfolio provides depth
              and detail – you can seamlessly move from total enterprise view to
              an individual asset level view, instilling the confidence required
              to quickly traverse your allocations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="leading-7 [&:not(:first-child)]:mt-5  text-xl font-bold">
              Market volatility preparedness
            </AccordionTrigger>
            <AccordionContent className="text-black text-start">
              Be prepared for tomorrow’s market by understanding how your
              portfolio risks react to different environments. Detailed
              historical views of risk can apply previous experiences to today,
              whether that be a fast recovery or a global recession. As market
              volatility spikes, comparisons to previous drawdowns become
              critical for investors to understand how their portfolio might
              behave.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="leading-7 [&:not(:first-child)]:mt-5  text-xl font-bold">
              Enhanced performance elvaluation
            </AccordionTrigger>
            <AccordionContent className="text-black text-start">
              Calculate your investment performance with consistency and nuance
              across different asset classes, covering your whole portfolio
              within a single-source platform.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
})