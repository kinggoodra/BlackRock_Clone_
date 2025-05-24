import { useInView } from "react-intersection-observer";
import { memo, useEffect, useRef } from "react";
  export default memo(function Video({ url,backgroundimg }) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
          videoRef.current.play();
        videoRef.current.muted = false;
        videoRef.current.loop = false;
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);
  return (
    <>
      <video
      poster={backgroundimg}
        ref={(node) => {
          ref(node);
          videoRef.current = node;
        }}
        controls
className="rounded-lg "
>
        <source src={url} />
      </video>
    </>
  );
});
