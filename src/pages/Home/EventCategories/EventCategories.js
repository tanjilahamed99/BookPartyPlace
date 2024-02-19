import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import SwiperSlider from "./SwiperSlider";

const EventCategories = ({ data }) => {


    return (
        <div className="md:my-20 container mx-auto">
            <SectionTitle title={'Explore Event Categories'} />


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