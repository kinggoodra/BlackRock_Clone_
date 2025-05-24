import { memo } from "react";

export default memo(function Para_Content() {
  return (
    <>
      <div className="p-10 sm:w-[60%] flex flex-col">
        <p
          className={
            " text-xl font-bold text-black text-start mb-5 break-words max-w-full"
          }
        >
          Below you will find information on how we deliver value to our
          shareholders, employees and communities.
        </p>
        <p
          className={
            " text-xl font-bold text-black text-start mb-5 break-words max-w-full"
          }
        >
          To gain further insights into how we invest on our clients’ behalf to
          help them meet their investment objectives, delve deeper into our
          fiduciary approach by exploring it <u>here.</u>
        </p>
        <hr className="border-[1px] border-black" />

        <h2 className="scroll-m-20 text-black pt-5 text-4xl font-extrabold tracking-tight first:mt-0">
          Weare committed to transparency
        </h2>
        <p
          className={
            " text-md font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
          BlackRock is committed to providing meaningful information to
          stakeholders, including information related to sustainability.
          Effective disclosure can lead to a better understanding of how
          companies are managed for the benefit of all stakeholders. See
          BlackRock's Corporate Sustainability disclosures in the Shareholders
          tab.
        </p>
      </div>
    </>
  );
});
