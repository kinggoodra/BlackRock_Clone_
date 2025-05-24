import { memo } from "react";

export default memo(function API_Approch() {
  return (
    <>
      <div className="flex flex-col ">
        <br />
        <h1 className="scroll-m-20  font-stretch-50% text-black  tracking-tight text-5xl ">
          API-first approch
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-5 font-normal">
          Aladdin Studio APIs enable you to build your own solutions. Access the
          breadth and depth of Aladdin data and capabilities. Retrieve, write,
          and modify data from across the Aladdin ecosystem to power proprietary
          applications and create custom tools that meet your needs. With
          Studio, team members across your organization can build new solutions
          and enhance existing workflows on top of Aladdin. Start building in
          minutes with developer guides, code snippets, and convenient
          documentation.
        </p>
        <br />
      </div>
    </>
  );
});
