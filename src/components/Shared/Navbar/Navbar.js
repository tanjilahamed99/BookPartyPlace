import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import logo from "../../../../public/images/Logo.png";
import profileImage from "../../../../public/images/profile.jpg";
import allNavText from "../../../lib/allNavText";
import Drawer from "./Drawer";

const Navbar = () => {
  const {
    WEB_NAME,
    WADDING,
    PARTIES,
    CORPORATE_EVENT,
    BIRTHDAY_PARTY,
    PHOTO_FILM_SHOOT,
    WORK_SHOP,
  } = allNavText;

  const ulLinks = (
    <>
      <li>
        <Link href={"/"}>{WADDING}</Link>
      </li>
      <li>
        <Link href={"/"}>{PARTIES}</Link>
      </li>
      <li>
        <Link href={"/"}>{CORPORATE_EVENT}</Link>
      </li>
      <li>
        <Link href={"/"}>{BIRTHDAY_PARTY}</Link>
      </li>
      <li>
        <Link href={"/"}>{PHOTO_FILM_SHOOT}</Link>
      </li>
      <li>
        <Link href={"/"}>{WORK_SHOP}</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start w-2/3">
          <div className="dropdown lg:hidden w-1/2 md:w-fit">
            <Drawer />
          </div>
          <div className="flex  items-center ">
            <Image
              className="w-10"
              src={logo}
              width={500}
              height={500}
              alt="Website logo"
            />
            {/* web name */}
            <Link href={"/"}>
              <h2 className="text-xl font-bold text-[#040404]">{WEB_NAME}</h2>
            </Link>
          </div>
        </div>
        <div className="navbar-end flex items-center gap-10 w-[33%] md:w-full">
          <div className="text-primary-text-gray text-lg md:flex items-center gap-8 hidden">
            <h2>Are u a Vendor ?</h2>
            <h2>Blog</h2>
          </div>
          <div className="flex items-center gap-5">
            <FaRegHeart className="text-4xl text-[#BCBFBA] hidden md:flex" />
            <div className="avatar">
              <div className="w-10 rounded-full">
                {/* navbar image */}
                <Image
                  src={profileImage}
                  alt="profile image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation links */}
      <hr className=" text-primary-text-gray border lg:flex mb-5  hidden" />
      <div className="lg:flex hidden justify-center mx-auto w-full">
        <div className="mt-2 ">
          {/* ul links */}
          <Dropdown />
        </div>
      </div>
      <hr className=" text-primary-text-gray border lg:flex mt-5 hidden" />
    </div>
  );
};

export default Navbar;
