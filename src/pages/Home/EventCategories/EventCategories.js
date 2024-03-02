import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import SwiperSlider from "./SwiperSlider";
import AllEventByVenuesText from "@/lib/eventByVenuesText";
import eventCategoryImg1 from '../../../../public/images/ExploreEvent/01 Weddings.jpg'
import eventCategoryImg2 from '../../../../public/images/ExploreEvent/02 Birthday party .jpg'
import eventCategoryImg3 from '../../../../public/images/ExploreEvent/03 Festivals.jpg'
import eventCategoryImg4 from '../../../../public/images/ExploreEvent/04 Performances.jpg'
import eventCategoryImg5 from '../../../../public/images/ExploreEvent/05 Family Gatherings .jpg'

const EventCategories = ({ data }) => {
  const { TITLE } = AllEventByVenuesText;

  return (
    <div className=" container mx-auto px-1">
      {/* EventCatagories title */}
      <SectionTitle title={TITLE} />

      {/* EventCatagories card for mobile devices */}
      <div className="lg:hidden">
        <SuggestionSlider
          data={{
            img1: eventCategoryImg1,
            img2: eventCategoryImg2,
            img3: eventCategoryImg3,
            img4: eventCategoryImg4,
            img5: eventCategoryImg5
          }}
        />
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
