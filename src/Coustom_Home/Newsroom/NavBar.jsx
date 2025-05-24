import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import Navitems from "../Navitems";
import NavLinks from "../NavLinks";
import { Badge, Menu, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router";

export default memo(function NavBar({ UniversaL, indexes, img }) {
  const location = useLocation();

  return (
    <>
      {/* pc */}
      <nav className="hidden sm:block h-13 bg-zinc-900 text-white p-2.5 position-sticky  w-full">
        <SVGS style={"ml-2  h-full"} img={img} />
        <dir className="inline ml-10 ">
          <Navitems />
        </dir>
      </nav>
      <nav className="ml-5 hidden sm:block">
        <NavLinks UniversaL={UniversaL} indexes={indexes} />
      </nav>
      {/* pc */}

      {/* sm */}
      <div className="block sm:hidden">
        <div className="   grid grid-cols-3  p-5  text-black position-sticky top-0 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={32} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"w-screen"}>
              {Universal.navItems.map((item, key) => (
                <DropdownMenuItem key={key}>
                  <Link className="text-lg text-black" to={`/${item}`}>
                    {item}
                  </Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />

              {Object.keys(indexes).map((item, key) => (
                <Accordion type="single" collapsible>
                  <AccordionItem key={key} value="item-1">
                    <AccordionTrigger className={"text-3xl"}>
                      {item}
                    </AccordionTrigger>
                    <AccordionContent>
                      {/*  */}
                      {Object.values(indexes)[key].map((items, key) => (
                        <Link
                          key={key}
                          to={`${
                            location.pathname === "/" ? "" : location.pathname
                          }/${item}/${items}`}
                        >
                          {
                            <p
                              className={`inline text-lg font-medium text-black  italic pl-5  leading-8  hover:underline decoration-yellow-300 decoration-[2px] `}
                            >
                              {items}
                              <br />
                            </p>
                          }
                        </Link>
                      ))}

                      {/*  */}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <SVGS style={"p-5 w-full bg-none h-full"} img="/src/blackrock.svg " />
          <Search size={32} className="justify-self-end ml-5" />
        </div>
        {/* sm */}
      </div>
    </>
  );
});
