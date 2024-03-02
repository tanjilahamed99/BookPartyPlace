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
  return (
    <div className="md:my-20 my-10 container mx-auto px-1">
      <SectionTitle title={TITLE} />

      {/* suggestion card for mobile devices */}
      <div className="lg:grid grid-cols-5 items-center gap-5   hidden">
        {/* {data?.slice(0, 5).map((i) => (
          <DisplayNData key={i._id} data={i}></DisplayNData>
        ))} */}

        <DisplayNData data={{ img: suggestionImage1 }} />
      </div>
      {/* suggestion card for lab and laptop or other larger devices */}
      <div className="lg:hidden">
        <SuggestionSlider data={data} />
      </div>
    </div>
  );
};

export default Suggestion;
