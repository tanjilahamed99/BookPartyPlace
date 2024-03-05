import Image from "next/image";
import SectionButton from "../SectionButton/SectionButton";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import logo from "../../../../public/images/Logo.png";
import footerAllText from "../../../lib/footerText";

const Footer = () => {
  // footer all text
  const {
    TITLE,
    DESC,
    BTN,
    CONTACT,
    ABOUT,
    BOOKING,
    OUR_TEAM,
    OFFERS,
    RIGHTS,
  } = footerAllText;

  return (
    <footer className="mt-20 mb-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-10 gap-10 lg:items-center px-5">
      <div className=" ">
        <div className="flex items-center">
          {/* image component */}
          <Image
            className="w-10"
            src={logo}
            width={500}
            height={500}
            alt="Website logo"
          />
          {/* footer section title */}
          <h2 className="text-xl font-bold text-[#040404]">{TITLE}</h2>
        </div>
        {/* footer section description */}
        <h2>{DESC}</h2>
        <div className="lg:w-[70%]  mt-5 relative w-[60%]">
          <input
            type="email"
            placeholder="Your your email"
            className=" border  rounded-md py-3 w-full lg:px-4 md:px-3 px-2 bg-white"
          />
          {/* footer section button */}
          <div className="absolute md:-right-[110px] -right-[108px] md:-top-[0.5px] top-[0.7px]">
            <SectionButton text={BTN} />
          </div>
        </div>
      </div>
      {/* footer all the navigation link */}
      <div className="text-[#040404] font-semibold md:text-xl lg:text-[17px] xl:text-lg  grid grid-cols-3 lg:gap-5 gap-5 ">
        <Link href={"/"}>
          <h1>{CONTACT}</h1>
        </Link>
        <Link href={"/"}>
          <h1>{ABOUT}</h1>
        </Link>
        <Link href={"/"}>
          <h1>{BOOKING}</h1>
        </Link>
        <Link href={"/"}>
          <h1>{OUR_TEAM}</h1>
        </Link>
        <Link href={"/"}>
          <h1>{OFFERS}</h1>
        </Link>
      </div>
      <div className="">
        {/* footer icons */}
        <div className="flex gap-6 items-center ">
          <Link href={"/"}>
            <FaFacebookF className="bg-[#61687233] text-4xl p-2 rounded-xl text-black" />
          </Link>
          <Link href={"/"}>
            <FaTwitter className="bg-[#61687233] text-4xl p-2 rounded-xl text-black" />
          </Link>
          <Link href={"/"}>
            <FaInstagram className="bg-[#61687233] text-4xl p-2 rounded-xl text-black" />
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn className="bg-[#61687233] text-4xl p-2 rounded-xl text-black" />
          </Link>
          <Link href={"/"}>
            <GrYoutube className="bg-[#61687233] text-4xl p-2 rounded-xl text-black" />
          </Link>
        </div>
        <p className="text-[#535552] mt-3">{RIGHTS}</p>
      </div>
    </footer>
  );
};

export default Footer;
