import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import SwiperSlider from "./SwiperSlider";
import AllEventByVenuesText from "@/lib/eventByVenuesText";
import eventCategoryImg1 from "../../../../public/images/ExploreEvent/01 Weddings .jpg";
import eventCategoryImg2 from "../../../../public/images/ExploreEvent/02 Birthday party .jpg";
import eventCategoryImg3 from "../../../../public/images/ExploreEvent/03 Festivals.jpg";
import eventCategoryImg4 from "../../../../public/images/ExploreEvent/04 Performances.jpg";
import eventCategoryImg5 from "../../../../public/images/ExploreEvent/05 Family Gatherings .jpg";
import eventCategoryImg6 from "../../../../public/images/Promotion/hwergbiubheg.jpg";

const EventCategories = ({ data }) => {
  const { TITLE } = AllEventByVenuesText;

  const eventCategoryData = [
    {
      img: eventCategoryImg1,
      type: "Wedding",
    },
    {
      img: eventCategoryImg2,
      type: "Birthday Party",
    },
    {
      img: eventCategoryImg3,
      type: "Festivals",
    },
    {
      img: eventCategoryImg4,
      type: "Performances",
    },
    {
      img: eventCategoryImg5,
      type: "Family Gatherings",
    },
    {
      img: eventCategoryImg6,
      type: "Other",
    },
  ];


  return (
    <div className=" container mx-auto px-1">
      {/* EventCatagories title */}
      <SectionTitle title={TITLE} />

      {/* EventCatagories card for mobile devices */}
      <div className="lg:hidden">
        <SuggestionSlider
          mainData={eventCategoryData}
        />
      </div>

      {/* EventCatagories card for tab and laptop/desktop or larger devices */}
      <div className="lg:inline hidden">
        <div className="">
          {/* swiper js */}
          <SwiperSlider data={eventCategoryData} />
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
