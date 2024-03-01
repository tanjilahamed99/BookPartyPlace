import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import SwiperSlider from "./SwiperSlider";
import AllEventText from "./eventText";

const EventCategories = ({ data }) => {
  const { TITLE } = AllEventText();

  return (
    <div className="md:my-20 container mx-auto">
      {/* EventCatagories title */}
      <SectionTitle title={TITLE} />

      {/* EventCatagories card for mobile devices */}
      <div className="lg:hidden">
        <SuggestionSlider data={data} />
      </div>

      {/* EventCatagories card for tab and laptop/desktop or larger devices */}
      <div className="lg:inline hidden">
        <div className="">
          {/* swiper js */}
          <SwiperSlider data={data} />
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
