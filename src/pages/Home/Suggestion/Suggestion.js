import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "./SuggestionSlider";

const Suggestion = async () => {

    const suggestionData = await UseAllSuggestionData()

    return (
        <div className="my-20 container mx-auto">
            <SectionTitle title={'What are you looking for ?'} />
            <div className="lg:grid grid-cols-5 items-center gap-5 mt-3 hidden">
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