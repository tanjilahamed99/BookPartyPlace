import UseAllSuggestionData from "@/components/Hooks/UseAllSuggestionData";
import SuggestionSlider from "./SuggestionSlider";
import DisplayNData from "@/components/DisplayNData/DisplayNData";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Suggestion = async () => {

    const suggestionData = await UseAllSuggestionData()

    return (
        <div className="md:my-20 my-10 container mx-auto">
            <SectionTitle title={'What are you looking for ?'} />
            <div className="lg:grid grid-cols-5 items-center gap-5   hidden">
                {
                    suggestionData?.slice(0, 5).map(i => <DisplayNData key={i._id} data={i}></DisplayNData>)
                }
            </div>
            <div className="lg:hidden">
                <SuggestionSlider data={suggestionData} />
            </div>
        </div>
    );
};

export default Suggestion;