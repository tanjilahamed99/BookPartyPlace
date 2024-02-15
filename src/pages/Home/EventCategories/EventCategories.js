
import SuggestionSlider from "../Suggestion/SuggestionSlider";
import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import SwiperSlider from "./SwiperSlider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";



const EventCategories = async () => {

    const suggestionData = await UseAllSuggestionData()



    return (
        <div className="md:my-20 container mx-auto">
            <SectionTitle title={'Explore Event Categories'} />

            
            <div className="lg:hidden">
                <SuggestionSlider data={suggestionData} />
            </div>

            {/* swiper js */}
            <div className="lg:inline hidden">
                <div className="">
                    <SwiperSlider data={suggestionData} />
                </div>
            </div>
        </div>
    );
};

export default EventCategories;