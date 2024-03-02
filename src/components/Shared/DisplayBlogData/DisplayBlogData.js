import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const DisplayBlogData = ({ data }) => {
  return (
    <div className="border border-[#BCBFBA] md:p-2 p-1 rounded-xl">
      <div className="rounded-2xl pb-4">
        {/* image component */}
        <ImageComponent src={data?.img} width={"w-full"} nHeight={'h-[120px]'} height={"h-[200px]"} />

        {/* i use static data for displaying card */}
        <div className="md:px-3 md:pb-1 md:mt-3 mt-1 md:space-y-2 space-y-0.5">
          <h2 className="font-semibold text-[14px] md:text-xl text-[#040404]">
            Best Night Photo at Alpha
          </h2>
          <div className="flex justify-between items-center text-[12px] md:text-base">
            <h2 className="text-[#535552]">By: Angelina</h2>
            <h2 className="flex items-center text-sm md:text-base">
              <FaStar className="text-[#FFBE00]" />
              <p>4.5</p>
            </h2>
          </div>
          <h2 className="text-[#535552] text-[12px] md:text-base">Published : Feb 10,2024</h2>
          <p className="text-[#535552] text-[10px] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlogData;
