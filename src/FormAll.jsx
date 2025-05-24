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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default memo(function FormAll({ H1Tag }) {
  const forms = useRef();
  const [Fill, setFill] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    state: "",
    primaryRole: "",
    requestType: "",
    checkbox: "",
  });

  useEffect(() => {
    const isComplete = Object.keys(formData).every(
      (field) => formData[field] && formData[field] !== ""
    );

    isComplete ? setFill(true) : setFill(false);
  }, [formData]);

  return (
    <>
    <div className="flex justify-center  mt-[25%] items-center">

    
      <Drawer>
        <DrawerTrigger className=" cursor-pointer rounded-none w-auto h-auto text-amber-50 bg-black p-5">
       {H1Tag}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className={"text-7xl"}></DrawerTitle>
            <DrawerDescription
              className={"text-black max-h-[75vh] overflow-y-auto"}
            >

 <div >
        <div className="m-7 ">
          <h1 className="text-3xl font-bold text-black mb-5">{H1Tag}</h1>
          <br />
          <br />
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
            </div>

            <div className="grid grid-rows-3 gap-2 ">
              <hr className="border-2 mt-10" />
              <span className="flex items-center m-3  space-x-2">
                <Checkbox />
                <label className=" max-h-max text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Please click here to opt-in to receiving insight emails form
                  Aladdin. form Aladdin Any data collection will be processed
                  according to BlackRock privicy policy You may unsubscribe at
                  any time.
                </label>
              </span>

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

                      primaryRole:
                        forms.current[8].innerText === "Primary Role *"
                          ? ""
                          : forms.current[8].innerText,
                      checkbox:
                        forms.current[10].ariaChecked === "true" ? true : "",
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
            </DrawerDescription>
          </DrawerHeader>
          <Button className={"hidden"}></Button>
          <DrawerFooter>
            <DrawerClose>
              <Button className="cursor-pointer rounded-none w-full bg-black ">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

     </div>
    </>
  );
});
