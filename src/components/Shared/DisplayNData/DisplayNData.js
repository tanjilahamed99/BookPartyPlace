import ImageComponent from "@/components/ImageComponent/ImageComponent";
import PropTypes from "prop-types";

const DisplayNData = ({ data }) => {

  return (
    <div>
      <div className="rounded-2xl shadow-2xl shadow-[#0404041A] bg-white md:pb-4 pb-2">
        {/* image component */}
        <ImageComponent
          height={"h-[200px]"}
          width={"w-[250px]"}
          mdHeight={"h-[150px]"}
          src={data.img.src}
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
