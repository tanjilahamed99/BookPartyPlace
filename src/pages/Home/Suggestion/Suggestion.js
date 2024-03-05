import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import SuggestionSlider from "./SuggestionSlider";
import AllSuggestionText from "@/lib/SuggestionText";
import suggestionImage1 from "../../../../public/images/SeggetionImages/01 Farm House.jpg";
import suggestionImage2 from "../../../../public/images/SeggetionImages/02 Resorts .jpg";
import suggestionImage3 from "../../../../public/images/SeggetionImages/03 Banquet Hall .jpg";
import suggestionImage4 from "../../../../public/images/SeggetionImages/04 Party Lawns.jpg";
import suggestionImage5 from "../../../../public/images/SeggetionImages/Card 7.png";

const Suggestion = ({ data }) => {
  const { TITLE } = AllSuggestionText;

  const suggestionData = [
    {
      img: suggestionImage1,
      type: "Farm House",
    },
    {
      img: suggestionImage2,
      type: "Resort",
    },
    {
      img: suggestionImage3,
      type: "Banquet Hall",
    },
    {
      img: suggestionImage4,
      type: "Party Lawns",
    },
    {
      img: suggestionImage5,
      type: "Other",
    }
  ];

  return (
    <div className="container mx-auto px-1">
      <SectionTitle title={TITLE} />

      {/* suggestion card for mobile devices */}
      <div className="lg:grid grid-cols-5 items-center gap-5   hidden">
        {suggestionData?.slice(0, 5).map((i,idx) => (
          <DisplayNData key={idx} data={i}></DisplayNData>
        ))}
      </div>

      {/* suggestion card for lab and laptop or other larger devices */}
      <div className="lg:hidden">
        <SuggestionSlider
          mainData={suggestionData}
        />
      </div>
    </div>
  );
};

export default Suggestion;
