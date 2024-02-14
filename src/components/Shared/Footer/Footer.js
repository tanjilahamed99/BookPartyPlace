import Image from "next/image";
import { GoSearch } from "react-icons/go";
import SectionButton from "../SectionButton/SectionButton";

const Footer = () => {
    return (
        <footer className="footer my-20 grid grid-cols-3">
            <div>
                <div className="flex  items-center">
                    <Image className="w-10" src={'https://i.ibb.co/Sy34qfd/Logo.png'} width={500} height={500} alt="Website logo" />
                    <h2 className="text-xl font-bold text-[#040404]">BookPartyPlace</h2>
                </div>
                <h2>
                    Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris
                </h2>
                <div className="lg:w-2/3  mt-5 relative w-[80%]">
                    <input type="text" placeholder="Your email" className="input input-bordered md:py-4 w-full" />
                    <div className="absolute -right-10 top-0">
                        <SectionButton text={'Subscribe'} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex  items-center">
                    <Image className="w-10" src={'https://i.ibb.co/Sy34qfd/Logo.png'} width={500} height={500} alt="Website logo" />
                    <h2 className="text-xl font-bold text-[#040404]">BookPartyPlace</h2>
                </div>
                <h2>
                    Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris
                </h2>
                <div className="lg:w-2/3  mt-5 relative w-[80%]">
                    <input type="text" placeholder="Your email" className="input input-bordered md:py-4 w-full" />
                    <div className="absolute -right-10 top-0">
                        <SectionButton text={'Subscribe'} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex  items-center">
                    <Image className="w-10" src={'https://i.ibb.co/Sy34qfd/Logo.png'} width={500} height={500} alt="Website logo" />
                    <h2 className="text-xl font-bold text-[#040404]">BookPartyPlace</h2>
                </div>
                <h2>
                    Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris
                </h2>
                <div className="lg:w-2/3  mt-5 relative w-[80%]">
                    <input type="text" placeholder="Your email" className="input input-bordered md:py-4 w-full" />
                    <div className="absolute -right-10 top-0">
                        <SectionButton text={'Subscribe'} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;