import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

export default memo(function HCard_Our() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 mt-[100%] sm:mt-[0%]  w-full">
  {Universal.OurCompany.map((cards, key) => (
    <Link key={key} to={cards[2]}>
      <div className="w-full min-h-[275px] border-2 bg-indigo-300 transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden">
        <h2 className="pt-4 pl-2 text-xl sm:text-2xl font-semibold tracking-tight">
          {cards[0]}
        </h2>
        <p className="pt-4 pl-3 text-base sm:text-lg font-medium">
          {cards[1]}
        </p>
      </div>
    </Link>
  ))}
</div>

    </>
  );
});
