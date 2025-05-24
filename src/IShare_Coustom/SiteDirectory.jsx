import { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Universal } from "@/UniversalClass/UniversalClass";
import { Link } from "react-router";

export default memo(function SiteDirectory() {

  return (
    <>
      <div className=" h-45 w-full">
        <h1 className="scroll-m-20 pl-5 pt-5 text-slate-950 text-4xl font-bold tracking-tight lg:text-5xl">
          Search the global site directory
        </h1>
        <p className=" leading-7 font-medium [&:not(:first-child)]:mt-6 pl-5  sm:w-150 text-slate-9500">
          Choose your location from the BlackRock or iShares tab below to access
          the right products, tools, and insights in your region.
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 m-8 gap-5">
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2 ">
              <AccordionTrigger>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  BlackRock
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <h1 className="scroll-m-20 pl-5 pt-5 text-slate-950 text-4xl font-bold tracking-tight lg:text-5xl">
                    BlackRock Site Directory
                  </h1>
                  <p className=" leading-7 font-medium [&:not(:first-child)]:mt-6 pl-5  sm:w-150 text-slate-9500">
                    We deliver investment products, technology, and tools –
                    helping millions meet immediate spending needs, build
                    wealth, and retire securely.
                  </p>
                  {Object.keys(Universal.BlackRockDirectory).map(
                    (index, keys) => (
                      <div className="m-8" key={keys}>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="font-bold text-xl">
                              {index}
                            </AccordionTrigger>
                            {Universal.BlackRockDirectory[index].map(
                              (item, key) => (
                                <div key={key}>
                                  <Link to="/">
                                    <AccordionContent className="font-medium ">
                                      {item}
                                    </AccordionContent>
                                  </Link>
                                </div>
                              )
                            )}
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  IShares
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <h1 className="scroll-m-20 pl-5 pt-5 text-slate-950 text-4xl font-bold tracking-tight lg:text-5xl">
                    iShares site directory
                  </h1>
                  <p className=" leading-7 font-medium [&:not(:first-child)]:mt-6 pl-5  sm:w-150 text-slate-9500">
                    Our iShares Exchange Traded Funds (ETFs) have revolutionized
                    investing with products that are convenient, inexpensive,
                    and easy to understand.
                  </p>
                  {Object.keys(Universal.IshareDirectory).map((index, key)=>(
                      <div className="m-8" key={key}>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="font-bold text-xl">
                            {index}
                          </AccordionTrigger>
                          {Universal.IshareDirectory[index].map(
                            (item, key) => (
                              <div key={key}>
                                <Link to="/">
                                  <AccordionContent className="font-medium">
                                    {item}
                                  </AccordionContent>
                                </Link>
                              </div>
                            )
                          )}
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
});
