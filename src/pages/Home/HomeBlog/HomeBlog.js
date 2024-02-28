import DisplayBlogData from "@/Shared/DisplayBlogData/DisplayBlogData";
import SectionButton from "@/Shared/SectionButton/SectionButton";
import homeBlogAllText from "./homeBlogText";

const HomeBlog = ({ data }) => {

  // Home Blog section all text
  const {
    TITLE,
    DESC,
    BTN,
    WEDDING,
    CORPORATE_BLOG,
    ENGAGEMENT_CEREMONY,
    PARTIES,
    TEAM_BUILDING,
    PHOTO_SHOOTS,
  } = homeBlogAllText;

  return (
    <div>
      {/* home blog section title */}
      <h2 className="md:text-2xl text-lg font-bold mb-2 text-[#040404] text-center ">
        {TITLE}
      </h2>
      {/* home blog section description */}
      <p className="text-[#535552] text-center">{DESC}</p>

      {/* Home blog all filter */}
      <div className="flex gap-5 flex-wrap justify-center mt-5">
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {WEDDING}
        </button>
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {CORPORATE_BLOG}
        </button>
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {ENGAGEMENT_CEREMONY}
        </button>
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {PARTIES}
        </button>
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {TEAM_BUILDING}
        </button>
        <button className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 hover:bg-primary-color active:bg-primary-color border-2  text-[#040404] text-xl">
          {PHOTO_SHOOTS}
        </button>
      </div>

      {/* display blog data here*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:gap-5 xl:gap-10 mt-10">
        {data?.slice(0, 3).map((i) => (
          <DisplayBlogData key={i._id} data={i}></DisplayBlogData>
        ))}
      </div>

      {/* see more button */}
      <div className="flex justify-center mt-5">
        <SectionButton text={BTN} />
      </div>
    </div>
  );
};

export default HomeBlog;
