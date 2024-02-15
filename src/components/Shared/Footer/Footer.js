import Image from "next/image";
import SectionButton from "../SectionButton/SectionButton";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer mt-20 flex flex-col lg:flex-row xl:gap-20 lg:gap-5 lg:items-center px-5">
            <div className="lg:w-1/3 mx-auto w-full">
                <div className="flex  items-center">
                    <Image className="w-10" src={'https://i.ibb.co/Sy34qfd/Logo.png'} width={500} height={500} alt="Website logo" />
                    <h2 className="text-xl font-bold text-[#040404]">BookPartyPlace</h2>
                </div>
                <h2>
                    Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris
                </h2>
                <div className="lg:w-[80%]  mt-5 relative w-[90%]">
                    <input type="text" placeholder="Your email" className="input input-bordered md:py-4 w-full" />
                    <div className="absolute -right-10 top-[1.8px]">
                        <SectionButton text={'Subscribe'} />
                    </div>
                </div>
            </div>
            <div className="text-[#040404] font-semibold md:text-xl  grid grid-cols-3 gap-5 lg:w-1/3 mx-auto w-full">
                <Link href={'/'}><h1>Contact</h1></Link>
                <Link href={'/'}><h1>About</h1></Link>
                <Link href={'/'}><h1>Booking</h1></Link>
                <Link href={'/'}><h1>Our Team</h1></Link>
                <Link href={'/'}><h1>Offers</h1></Link>
            </div>
            <div className=" lg:w-1/3 mx-auto w-full">
                <div className="flex gap-6 items-center">
                    <FaFacebookF className="bg-[#61687233] text-4xl p-2 rounded-xl"/>
                    <FaTwitter className="bg-[#61687233] text-4xl p-2 rounded-xl"/>
                    <FaInstagram className="bg-[#61687233] text-4xl p-2 rounded-xl"/>
                    <FaLinkedinIn className="bg-[#61687233] text-4xl p-2 rounded-xl"/>
                    <GrYoutube className="bg-[#61687233] text-4xl p-2 rounded-xl"/>
                </div>
                <p className="text-[#535552] mt-3">2024 BookPartyPlace. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;