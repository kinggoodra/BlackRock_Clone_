import { memo } from "react";

export default memo(function TopOfAladdin() {
  return (
    <>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        <div>
          <br />
          <h2 className="scroll-m-20  pb-2 text-4xl font-normal tracking-tight first:mt-0">
            BUILD ON TOP OF ALADDIN
          </h2>
          <p className="text-lg font-light">
            Whether you’re a professional engineer building new workflow
            applications, a code-curious portfolio manager extracting investment
            insights, or a data analyst automating reporting, Aladdin Studio
            gives you the data, tools, and governance support to make Aladdin
            your own.
          </p>
        </div>
      </div>
    </>
  );
});
