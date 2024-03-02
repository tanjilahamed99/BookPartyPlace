import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import logo from "../../../../public/images/Logo.png";
import profileImage from "../../../../public/images/profile.jpg";
import allNavText from "../../../lib/allNavText";


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
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary-color mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {ulLinks}
            </ul>
          </div>
          <div className="flex  items-center">
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
        <div className="navbar-end flex items-center gap-10">
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
      <div className="lg:flex hidden justify-center mx-auto w-full">
        <div className="mt-2 ">
          <hr className=" text-primary-text-gray lg:flex mb-5" />

          {/* ul links */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
