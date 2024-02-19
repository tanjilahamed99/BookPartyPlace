import Image from "next/image";
import { FaStar } from "react-icons/fa";

const DisplayBlogData = ({ data }) => {
    return (
        <div className="border border-[#BCBFBA] p-2 rounded-xl">
            <div className='rounded-2xl pb-4'>
                <Image
                    className="w-full h-[200px]"
                    src={data?.img}
                    width={500}
                    height={500}
                    alt="blog data image" />

                {/* use data name or data type. i set static data  */}
                <div className="md:px-3 pb-1 mt-3 space-y-2">
                    <h2 className="font-semibold text-xl text-[#040404]">Best Night Photo at Alpha</h2>
                    <div className="flex justify-between items-center">
                        <h2 className='text-[#535552]'>By:  Angelina</h2>
                        <h2 className="flex items-center text-sm md:text-base">
                            <FaStar className="text-[#FFBE00]" />
                            <p>4.5</p>
                        </h2>
                    </div>
                    <h2 className="text-[#535552]">Published : Feb 10,2024</h2>
                    <p className="text-[#535552]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DisplayBlogData;