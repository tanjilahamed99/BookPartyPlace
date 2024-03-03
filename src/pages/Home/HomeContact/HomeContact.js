import SectionButton from "@/components/Shared/SectionButton/SectionButton";
import Image from "next/image";
import React from "react";
import contactImage from "../../../../public/images/HomeContact/Need Help for planning your venue .jpg";
import AllHomeContactText from "../../../lib/homeContactText";

const HomeContact = () => {
  // home contact text
  const { BTN, DESC1, DESC2, TITLE } = AllHomeContactText;

  return (
    <div className="flex flex-col-reverse  md:flex-row justify-around items-center  gap-7 md:gap-2  lg:gap-0 px-2">
      <div className="space-y-3 clear-start text-center md:text-start">
        {/* contact section title  */}
        <h2 className="lg:text-2xl text-lg md:text-xl  font-bold text-[#040404]">
          {TITLE}
        </h2>
        {/* contact section description  */}
        <div>
          <h3 className="text-[#535552]">{DESC1}</h3>
          <h3 className="text-[#535552]">{DESC2}</h3>
        </div>
        {/* contact section button  */}
        <SectionButton text={BTN} />
      </div>
      <div>
        {/* image component */}
        <Image
          className="lg:w-[600px] w-[300px] h-[220px] md:w-[400px]"
          src={contactImage}
          width={500}
          height={500}
          alt="contact image"
        />
      </div>
    </div>
  );
};

export default HomeContact;
