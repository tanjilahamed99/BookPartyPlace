import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Image from "next/image";
import PropTypes from "prop-types";

const DisplayNData = ({ data }) => {

  return (
    <div>
      <div className="rounded-2xl md:shadow-lg md:shadow-[#0404041A] bg-white pb-2 md:pb-3 border">
        {/* image component */}
        <ImageComponent
          height={"h-[200px]"}
          width={"w-[250px]"}
          mdHeight={"h-[150px]"}
          src={data?.img?.src}
        />

        <h2 className="text-center md:text-xl md:mt-3 mt-2  text-[10px] text-black font-semibold">
          {data?.type}
        </h2>
      </div>
    </div>
  );
};

DisplayNData.propTypes = {
  data: PropTypes.object,
  // data: PropTypes.string,
};

export default DisplayNData;
