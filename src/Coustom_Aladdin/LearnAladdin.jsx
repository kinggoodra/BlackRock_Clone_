import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { memo, useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Universal } from "@/UniversalClass/UniversalClass";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default memo(function LearnAladdin({H1Tag}) {
  const forms = useRef();
  const [Fill, setFill] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    state: "",
    phoneNumber: "",
    organizationType: "",
    primaryRole: "",
    requestType: "",
    interestedIn: [],
    textArea: "",
  });
  useEffect(() => {
    const isComplete = Object.keys(formData).every(
      (field) => formData[field] && formData[field] !== ""
    );

    isComplete ? setFill(true) : setFill(false);
  }, [formData]);

  return (
    <>
      
      <div id="Book a meeting">
        <div className="m-7 ">
          <h1 className="text-3xl font-bold text-black mb-5">
            {H1Tag}
          </h1>
          <form ref={forms}>
            <div className="grid  grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-5 pb-5 ">
              <Input
                type="text"
                placeholder="First Name *"
                className="rounded-none border-black "
              />
              <Input
                type="text"
                placeholder="Last Name *"
                className="rounded-none border-black "
              />
              <Input
                type="email"
                placeholder="Business Email * "
                className="rounded-none border-black "
              />
              <Input
                type="text"
                placeholder="Company Name * "
                className="rounded-none border-black "
              />
              {/*  */}
              <Select>
                <SelectTrigger className=" w-auto rounded-none border-black">
                  <SelectValue placeholder="Country *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Universal.Form.Country.map((index, key) => (
                      <SelectItem key={key} value={index}>
                        {index}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*  */}
              <Select onValueChange={(value) => setFormData({ state: value })}>
                <SelectTrigger className=" w-auto rounded-none border-black">
                  <SelectValue placeholder="State *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Universal.Form.State.map((index, key) => (
                      <SelectItem key={key} value={index}>
                        {index}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*  */}
              <Input
                type="tel"
                placeholder="Phone Number * "
                className="rounded-none border-black "
              />
              {/*  */}
              <Select>
                <SelectTrigger className=" w-auto rounded-none border-black">
                  <SelectValue placeholder="Organization Type *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Universal.Form.OrganizationType.map((index, key) => (
                      <SelectItem key={key} value={index}>
                        {index}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*  */}
              <Select>
                <SelectTrigger className=" w-auto rounded-none border-black">
                  <SelectValue placeholder="Primary Role * " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Universal.Form.PrimaryRole.map((index, key) => (
                      <span key={key}>
                        <SelectItem value={index}>{index}</SelectItem>
                      </span>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*  */}
              <Select>
                <SelectTrigger className=" w-auto rounded-none border-black">
                  <SelectValue placeholder="Reuest Type * " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={"Contact Sales"}>
                      Contact Sales
                    </SelectItem>
                    <SelectItem value={"Client Support"}>
                      Client Support
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4   gap-5 sm:gap-3">
              {Universal.Form.InterestedIn.map((index, key) => (
                <span className="flex items-center space-x-2" key={key}>
                  <Checkbox id={key} />
                  <label
                    htmlFor={key}
                    className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {index}
                  </label>
                </span>
              ))}
            </div>
            <div className="grid grid-rows-3 gap-2 ">
              <hr className="border-2 mt-15" />
              <span className="flex items-center m-3  space-x-2">
                <Checkbox />
                <label className=" max-h-max text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Please click here to opt-in to receiving insight emails form
                  Aladdin. form Aladdin Any data collection will be processed
                  according to BlackRock privicy policy You may unsubscribe at
                  any time.
                </label>
              </span>
              <Textarea
                placeholder="How can we help you . *"
                className="border-black"
              />
              <p className="place-self-end h-max ">
                *Required information | Read our
                <b>
                  <u> Privacy policy</u>
                </b>
                <Button
                  onClick={(Submit) => {
                    Submit.preventDefault();

                    setFormData({
                      firstName: forms.current[0].value,
                      lastName: forms.current[1].value,
                      email: forms.current[2].value,
                      companyName: forms.current[3].value,
                      country:
                        forms.current[4].innerText === "Country *"
                          ? ""
                          : forms.current[4].innerText,
                      state:
                        forms.current[6].innerText === "State *"
                          ? ""
                          : forms.current[6].innerText,
                      phoneNumber: forms.current[8].value,
                      organizationType:
                        forms.current[9].innerText === "Organization Type *"
                          ? ""
                          : forms.current[9].innerText,
                      primaryRole:
                        forms.current[11].innerText === "Primary Role *"
                          ? ""
                          : forms.current[11].innerText,
                      requestType:
                        forms.current[13].innerText === "Reuest Type *"
                          ? ""
                          : forms.current[13].innerText,
                      interestedIn: [
                        forms.current[15].nextSibling.checked
                          ? forms.current[15].parentNode.innerText
                          : "",
                        forms.current[17].nextSibling.checked
                          ? forms.current[17].parentNode.innerText
                          : "",
                        forms.current[19].nextSibling.checked
                          ? forms.current[19].parentNode.innerText
                          : "",
                        forms.current[21].nextSibling.checked
                          ? forms.current[21].parentNode.innerText
                          : "",
                        forms.current[23].nextSibling.checked
                          ? forms.current[23].parentNode.innerText
                          : "",
                        forms.current[25].nextSibling.checked
                          ? forms.current[25].parentNode.innerText
                          : "",
                        forms.current[27].nextSibling.checked
                          ? forms.current[27].parentNode.innerText
                          : "",
                        forms.current[29].nextSibling.checked
                          ? forms.current[29].parentNode.innerText
                          : "",
                        forms.current[31].nextSibling.checked
                          ? forms.current[31].parentNode.innerText
                          : "",
                        forms.current[33].nextSibling.checked
                          ? forms.current[33].parentNode.innerText
                          : "",
                        forms.current[35].nextSibling.checked
                          ? forms.current[35].parentNode.innerText
                          : "",
                        forms.current[37].nextSibling.checked
                          ? forms.current[37].parentNode.innerText
                          : "",
                      ],
                      textArea: forms.current[41].value,
                    });
                  }}
                  className="cursor-pointer  ml-2 rounded-none  bg-black "
                >
                  Submit
                </Button>
              </p>

              {Fill ? (
                ""
              ) : (
                <p className="leading-7 [&:not(:first-child)] font-medium place-self-end h-max text-red-700">
                  * Please Fill All Required Information
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
});
