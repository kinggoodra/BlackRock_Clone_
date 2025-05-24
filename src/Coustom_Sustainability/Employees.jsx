import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import ADDITIONAL_RESOURCES from "./ADDITIONAL_RESOURCES";

export default memo(function Employees() {
  return (
    <>
      <div className="p-10 sm:w-[60%] flex flex-col justify-start">
        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">We prioritize human capital</h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >
            As an asset manager, the long-term sustainability of our firm is heavily dependent on our most important investment – the one we make in our people. That’s why we’re dedicated to creating an environment where our colleagues feel welcomed, valued and supported with networks, benefits and development opportunities to help them thrive. We are committed to protecting the human rights of our employees through policies that seek to provide equal treatment. We are also dedicated to providing a safe and healthy working environment for all employees.
        </p>
        <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> <b> Health and safety</b>
          </Button>
        </div>
        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0"> We work as One BlackRock</h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >We believe that maintaining a strong corporate culture is an important component of our human capital management practices and critical to our long-term success. Our culture is underpinned by five core principles that unify our workforce and guide how we interact with our employees, our clients, the communities in which we operate and our other stakeholders: (1) We are a fiduciary to our clients; (2) We are One BlackRock (1BLK); (3) We are passionate about performance; (4) We take emotional ownership; and (5) We are committed to a better future.

        </p>
        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">We support our employees’ well-being </h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        > We care about our employees’ physical, emotional and financial well-being and design our benefits to support employees across many aspects of their lives. To help employees stay energized, engaged and inspired, we offer a wide range of benefits including, where applicable, a strong retirement plan, support for working parents and Flexible Time Off (FTO).

        </p>
        <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> <b> Rewards and benifits</b>
          </Button>
        </div>

        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">We provide learining and development opportunities</h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        >Our learning and development goals center around our investment in our employees, where we are focused on deepening a culture of learning through personalized, intuitive, and inclusive employee experiences to drive career and business impact. Our human capital management practices are designed to provide opportunities for our employees to grow and thrive at every stage of their career: as they join, as they grow, as they need, and as they advance. From in-person and virtual experiences to self-paced digital learning for all employees, through to more selective leadership development programs, our culture of learning helps us identify and grow our leaders from within. Supporting our employees' development is key to our mission to help more and more people experience financial well-being.

        </p>
                <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> <b> Learning and development</b>
          </Button>
        </div>
        
        <h2 className="scroll-m-20 text-black pt-5 text-2xl font-semibold tracking-tight first:mt-0">We lead with ethics and integrity </h2>
        <p
          className={
            " text-lg  font-normal text-black text-start mt-5 break-words max-w-full"
          }
        > Our reputation is one of our most important assets. We hold ourselves to standards that not only meet those required by the laws and regulations that apply to us, but also match our principles, which are rooted in exceeding our clients’ expectations.

        </p>
                <div className=" mr-14 w-full    mt-5">
          <Button
            variant="secondary"
            className=" rounded-none  cursor-pointer w-[75%] text-amber-100 hover:text-black bg-black"
          >
            <ChevronRightIcon /> <b> Ethics and integrity</b>
          </Button>
        </div>
        <ADDITIONAL_RESOURCES/>
      </div>
    </>
  );
});
