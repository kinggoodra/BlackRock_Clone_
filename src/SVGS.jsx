import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { memo } from "react";

export default memo(function SVGS({style,img}) {

  return (
    <>
      <Badge variant="secondary" className={style}>
        <Link to="/BlackRock_Clone_">
          <img src={img} alt="blackrock.svg" />
        </Link>
      </Badge>
    </>
  );
});
