import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Podcast } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default memo(function Podcasts({H1,H3,P,BTNText,SRC}) {
  const Audio = useRef();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [play, pause] = useState(false);
  const [isplay, setisplay] = useState(true);

  useEffect(() => {
    if (Audio.current && inView) {
      Audio.current.play();
      setisplay(true);
    } else {
      Audio.current.pause();
      setisplay();
    }
  }, [inView]);
  useEffect(() => {
    Audio.current.addEventListener("ended", () => setisplay(false));
  }, []);
  return (
    <>
      <div className="h-auto w-full" ref={ref}>
        <div className=" m-3  grid  grid-rows-4 sm:grid-cols-2   sm:grid-rows-3  ">
          <div className="col-span-2">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight ">
              {H1}
            </h1>
          </div>
          <div className=" row-start-2 row-end-3 ">
            <h3 className="scroll-m-20 text-2xl font-medium tracking-tight">
{H3}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-8">
{P}
            </p>
          </div>
          <div className=" row-start-4 sm:row-start-3">
            <a href="#Book a meeting">

              <Button  className="cursor-pointer rounded-none mt-15 bg-black ">
                <ChevronRightIcon className="text-orange-400" /> {BTNText}
              </Button>
            
            </a>
          </div>
          <div className="  row-start-3 sm:col-start-2 sm:row-start-2 sm:row-end-5  ">
            <div
              className={`rounded-full ${
                isplay ? "animate-spin duration-[2s]" : ""
              } h-30 w-30 ml-10 sm:ml-[50%] flex items-center justify-center mt-[10%] bg-black align-middle `}
            >
              <Podcast
                className="text-orange-500 h-20 w-20"
                onClick={() => {
                  if (play) {
                    Audio.current.play();
                    pause(false);
                    setisplay(true);
                  } else {
                    Audio.current.pause();
                    pause(true);
                    setisplay(false);
                  }
                }}
              />
            </div>
            <audio
              ref={(node) => {
                Audio.current = node;
              }}
              src={SRC}
            ></audio>
            <p className="text-sm text-muted-foreground ml-10 sm:ml-[50%]">
              Click center to Pause Play
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
