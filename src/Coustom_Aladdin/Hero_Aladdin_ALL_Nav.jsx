import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";

export default memo(function Hero_Aladdin_ALL_Nav({ H2, p, BTNText, ImgURL ,BTNHidden }) {
  return (
    <>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        <div>
          <br />
          <h2 className="scroll-m-20  pb-2 text-4xl font-normal tracking-tight first:mt-0">
            {H2}
          </h2>
          <p className="text-lg font-light">{p}</p>

          {BTNHidden?"":<a href="#Book a meeting">
            <Button className="cursor-pointer rounded-none bg-black m-5">
              <ChevronRightIcon /> {BTNText}
            </Button>
          </a>}
        </div>
        <img src={ImgURL} alt="Preqin logo" />
      </div>
    </>
  );
});
