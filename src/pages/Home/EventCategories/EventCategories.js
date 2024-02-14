import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";

import SwiperSlider from "./SwiperSlider";



const EventCategories = async () => {

    const suggestionData = await UseAllSuggestionData()


    return (
        <div className="md:my-20 container mx-auto">
            <SectionTitle title={'Explore Event Categories'} />

            <div className="lg:hidden">
                <SuggestionSlider data={suggestionData} />
            </div>

            {/* swiper js */}
            <div className="hidden lg:flex">
                <SwiperSlider data={suggestionData} />
            </div>


        </div>
    );
};

export default EventCategories;