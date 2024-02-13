import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Dropdown from "./Dropdown";

const Navbar = () => {

    const ulLinks = <>

        <li><Link href={'/'}>Weddings</Link></li>
        <li><Link href={'/'}>Parties</Link></li>
        <li><Link href={'/'}>Corporate Events</Link></li>
        <li><Link href={'/'}>Birthday Party</Link></li>
        <li><Link href={'/'}>Photo/ Filmshoot</Link></li>
        <li><Link href={'/'}>Workshop</Link></li>

    </>


    const WeddingLinks = <>



    </>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary-color mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {
                                ulLinks
                            }
                        </ul>
                    </div>
                    <div className="flex  items-center">
                        <Image className="w-10" src={'https://i.ibb.co/Sy34qfd/Logo.png'} width={500} height={500} alt="Website logo" />
                        <h2 className="text-xl font-bold text-[#040404]">BookPartyPlace</h2>
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
                                <Image src={'https://i.ibb.co/k3twN21/7c81e16cc1f60c3091c8fd5e7d764f3b.jpg'} alt="profile image" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* navigation links */}
            <div className="lg:flex hidden justify-center mx-auto w-full">
                <div className="mt-2 ">
                    <hr className="w-full text-primary-text-gray lg:flex mb-5" />

                    {/* ul links */}
                    <Dropdown />
                </div>
            </div>

        </div>
    );
};

export default Navbar;