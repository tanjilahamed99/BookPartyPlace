import Image from "next/image";
// import PropTypes from "prop-types";

const ImageComponent = ({ src, width, height,mdHeight,nHeight }) => {

  return (
    <div>
      <Image
        className={`w-full h-[100px] ${nHeight}   md:${width} md:h-[200px] lg:${mdHeight} xl:${height} md:rounded-t-2xl rounded-md`}
        height={500}
        width={500}
        src={src}
        alt="image component"
      />
    </div>
  );
};

// ImageComponent.propTypes = {
//   src: PropTypes.string,
// };

export default ImageComponent;
