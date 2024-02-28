import Image from "next/image";
import SectionButton from "../SectionButton/SectionButton";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import logo from "../../../public/images/Logo.png";
import footerAllText from "./footerText";

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
    <footer className="footer mt-20 mb-10 flex flex-col lg:flex-row xl:gap-20 lg:gap-5 lg:items-center px-5">
      <div className="lg:w-1/3 mx-auto w-full">
        <div className="flex  items-center">
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
        <div className="lg:w-[80%]  mt-5 relative w-[90%]">
          <input
            type="text"
            placeholder="Your email"
            className="input input-bordered md:py-4 w-full"
          />
          {/* footer section button */}
          <div className="absolute -right-12 top-[1.8px]">
            <SectionButton text={BTN} />
          </div>
        </div>
      </div>
      {/* footer all the navigation link */}
      <div className="text-[#040404] font-semibold md:text-xl  grid grid-cols-3 gap-5 lg:w-1/3 mx-auto w-full">
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
      <div className=" lg:w-1/3 mx-auto w-full">
        {/* footer icons */}
        <div className="flex gap-6 items-center">
          <FaFacebookF className="bg-[#61687233] text-4xl p-2 rounded-xl" />
          <FaTwitter className="bg-[#61687233] text-4xl p-2 rounded-xl" />
          <FaInstagram className="bg-[#61687233] text-4xl p-2 rounded-xl" />
          <FaLinkedinIn className="bg-[#61687233] text-4xl p-2 rounded-xl" />
          <GrYoutube className="bg-[#61687233] text-4xl p-2 rounded-xl" />
        </div>
        <p className="text-[#535552] mt-3">{RIGHTS}</p>
      </div>
    </footer>
  );
};

export default Footer;
