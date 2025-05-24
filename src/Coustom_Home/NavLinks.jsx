import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Toggle } from "@/components/ui/toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
let lists;
export default function NavLinks({UniversaL,indexes}) {
  const [Drawer, SetDrawer] = useState(0);
  const [Effecterr, SetEffecterr] = useState(false); 
  for (const keys in indexes) {
    keys === Drawer ? (lists = indexes[keys]) : false;
  }
const location=useLocation()





  return (
    <>
    

      <NavigationMenu  >
        <NavigationMenuList  className="flex flex-row  space-x-7 ">
          {UniversaL.map((item, key) => (
            <NavigationMenuItem   key={key}>
              <NavigationMenuTrigger
              
                onClick={(Click) => {
                  SetDrawer(Click.target.innerText);
                  SetEffecterr(true);
                }}
              
                className={"text-sm font-medium leading-none"}
              >
                {item}
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <br />
      <div id="Grid">
        <div
          id="item1"
          className={`${
            typeof lists === "undefined" ? "" : `bg-slate-950`
          }  p-[2%] max-w-screen z-10 rounded-sm text-start absolute transition-opacity duration-300    ${
            Effecterr ? " opacity-100 left-[] " : " opacity-0  left-[-100%] "
          }    `}
        >
          <Toggle
            size="sm"
            onClick={() => setTimeout(() => SetEffecterr(false), 300)}
            className="text-white cursor-pointer ml-[85%]"
          >
            <X />
          </Toggle>

          { 


          
          typeof lists === "undefined"
            ? ""
            : lists.map((index, key) => (
                <div key={key} className="p-1.5">
                  {/* {console.log("index is",index)
                  } */}
                  <Link to={`${location.pathname==="/"?"":location.pathname}/${Drawer}/${index}`} >
                    <p  className= {`inline text-sm font-medium leading-none text-white -tracking-tighter p-5    hover:underline decoration-yellow-300 decoration-[2px] `} >
                      {index}
                    </p>
                  </Link>
                </div>
              ))
              }
        </div>
      </div>
    </>
  );
}
