import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import SwiperSlider from "./SwiperSlider";
import allText from "./eventText";

const EventCategories = ({ data }) => {
  const { TITLE } = allText;

  return (
    <div className="md:my-20 container mx-auto">
      <SectionTitle title={TITLE} />

      <div className="lg:hidden">
        <SuggestionSlider data={data} />
      </div>

      {/* swiper js */}
      <div className="lg:inline hidden">
        <div className="">
          <SwiperSlider data={data} />
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
