import DisplayNData from "@/Shared/DisplayNData/DisplayNData";
import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "./SuggestionSlider";

const Suggestion = ({ data }) => {
    return (
        <div className="md:my-20 my-10 container mx-auto">
            <SectionTitle title={'What are you looking for ?'} />
            <div className="lg:grid grid-cols-5 items-center gap-5   hidden">
                {
                    data?.slice(0, 5).map(i => <DisplayNData key={i._id} data={i}></DisplayNData>)
                }
            </div>
            <div className="lg:hidden">
                <SuggestionSlider data={data} />
            </div>
        </div>
    );
};

export default Suggestion;