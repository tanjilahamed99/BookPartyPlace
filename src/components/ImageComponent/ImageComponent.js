import Image from "next/image";
import PropTypes from "prop-types";

const ImageComponent = ({ src }) => {
  return (
    <div>
      <Image
        className="w-full h-[100px]   md:w-[250px] md:h-[200px] lg:h-[180px] xl:h-[250px] rounded-t-2xl"
        height={500}
        width={500}
        src={src}
        alt="image component"
      />
    </div>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string,
};

export default ImageComponent;
