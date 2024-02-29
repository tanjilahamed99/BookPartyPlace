import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Image from "next/image";
import PropTypes from "prop-types";

const DisplayNData = ({ data }) => {
  return (
    <div>
      <div className="rounded-2xl shadow-2xl shadow-[#0404041A] bg-white pb-4">
        {/* image component */}
        <ImageComponent height={'h-[200px]'} width={'w-[250px]'} mdHeight={'h-[150px]'} src={data.img} />

        <h2 className="text-center md:text-xl mt-3  text-[10px]">
          {data?.roomType}
        </h2>
      </div>
    </div>
  );
};

DisplayNData.propTypes = {
  data: PropTypes.object,
};

export default DisplayNData;
