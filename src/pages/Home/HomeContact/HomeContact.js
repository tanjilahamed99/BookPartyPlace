import SectionButton from "@/Shared/SectionButton/SectionButton";
import Image from "next/image";
import React from "react";
import contactImage from "../../../../public/images/contact.jpg";
import homeContactAllText from "./homeContactText";

const HomeContact = () => {
  const { BTN, DESC, TITLE } = homeContactAllText;

  return (
    <div className="flex flex-col-reverse  md:flex-row justify-around items-center my-20 gap-7 md:gap-0">
      <div className="space-y-3 clear-start text-center md:text-start">
        <h2 className="md:text-2xl text-lg  font-bold text-[#040404]">
          {TITLE}
        </h2>
        <h3 className="text-[#535552]">{DESC}</h3>
        <SectionButton text={BTN} />
      </div>
      <div>
        <Image
          className="lg:w-[600px] w-[300px] h-[220px] md:w-[300px]"
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
