import DisplayLData from "@/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import promotionAllText from "./promotionText";

const Promotion = ({ data }) => {
  const { TITLE } = promotionAllText;

  return (
    <div className="my-20">
      <SectionTitle title={TITLE} />

      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          <DisplayLDataSlider view={3.5} data={data} />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider view={3} data={data} />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider view={2.3} data={data} />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {data?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Promotion;
