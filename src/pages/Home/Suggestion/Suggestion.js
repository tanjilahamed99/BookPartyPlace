import DisplayNData from "@/Shared/DisplayNData/DisplayNData";
import SectionTitle from "@/Shared/SectionTitle/SectionTitle";
import SuggestionSlider from "./SuggestionSlider";
import AllSuggestionText from "./SuggestionText";

const Suggestion = ({ data }) => {
  const { TITLE } = AllSuggestionText();
  return (
    <div className="md:my-20 my-10 container mx-auto">
      <SectionTitle title={TITLE} />

      {/* suggestion card for mobile devices */}
      <div className="lg:grid grid-cols-5 items-center gap-5   hidden">
        {data?.slice(0, 5).map((i) => (
          <DisplayNData key={i._id} data={i}></DisplayNData>
        ))}
      </div>

      {/* suggestion card for lab and laptop or other larger devices */}
      <div className="lg:hidden">
        <SuggestionSlider data={data} />
      </div>
    </div>
  );
};

export default Suggestion;
