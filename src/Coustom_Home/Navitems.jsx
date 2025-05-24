import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo, useMemo } from "react";

export default memo(function Navitems() {
const navElements=useMemo(()=>(
  Universal.navItems.map((item, key) => (
    <Badge key={key} className="sm:h-full mr-auto   ">
      <Link className="text-sm text-muted-foreground" to={`/${item}`}>
        {item}
      </Link>
    </Badge>
  ))
),[Universal.navItems])
  return (
    <>
      {navElements}
    </>
  );
});
