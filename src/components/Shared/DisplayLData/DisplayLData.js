import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import ImageSlider from "./ImageSlider";

const DisplayLData = ({ data }) => {
    return (
        <div href={'/'}>
            <div className='rounded-2xl pb-4'>
                <div className="relative">
                    {/* image slider */}
                    <ImageSlider id={data._id} data={data} />
                    <FaHeart
                        className="text-[#BCBFBA] absolute top-5 right-5"
                    />

                </div>

                {/* use data name or data type. i set static data  */}
                <div className="md:px-2 pb-3 mt-3 space-y-2">
                    <div className="flex justify-between items-center">
                        <h2 className='md:text-xl text-sm text-[#040404] font-semibold'>Party Place</h2>
                        <h2 className="flex items-center text-sm md:text-base">
                            <FaStar className="text-[#FFBE00]" />
                            <p>4.5</p>
                        </h2>
                    </div>
                    <h2 className="flex gap-1 text-[#535552] md:text-lg text-[10px] items-center">
                        <TiLocationOutline />
                        <p>Kukkatpally, Hyderabad, TS</p>
                    </h2>
                    <p className="text-[#535552] text-[12px] md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex justify-between text-[10px] md:text-base">
                        <h2 className="flex items-center gap-1 text-[#535552]">
                            <IoIosPeople className="md:text-xl" />
                            <p>200-300 </p>
                        </h2>
                        <h2 className="flex items-center md:gap-1 text-[#535552]">
                            <p className="md:text-xl">$</p>
                            <p>50,000/ Day</p>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayLData;