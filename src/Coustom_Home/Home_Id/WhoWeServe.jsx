import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default memo(function WhoWeServe({_WhoWeServefnc}) {
    const { ref, inView } = useInView({
        threshold: 1,
      });
      useEffect(() => {
        _WhoWeServefnc(inView);
      }, [inView]);
    
  return (
    <>
      <div id="Who we serve" ref={ref}></div>
      <div className="mt-10 p-10 ">
        <h3 className="scroll-m-20 text-2xl text-black font-bold  tracking-tight">
          Who we serve
        </h3>
        <div className="grid grid-cols-1  sm:grid-cols-3 ">
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Individuals and families
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Providing choice for those investing for retriement, a new home or
              a child’s education{" "}
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Finacial advisors{" "}
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Helping people at all in income levels invest for their future
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Education and nonprofit organization
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Working to educatemore student and solve social challanges.{" "}
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Pension Plans
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Managing the retriement saving of teachers,doctor,workers and
              small business oweners{" "}
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Insurance companies
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Supporting people during life’s most difficult momnets.{" "}
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 pt-5 text-2xl text-black font-bold  text-start tracking-tight">
              Government
            </h3>
            <p className="text-md font-normal pt-5    leading-6 text-black">
              Finacncing new hoispitals ,school , roads and other projects
              helping to drive economic growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
