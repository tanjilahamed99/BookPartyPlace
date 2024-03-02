import DisplayBlogData from "@/components/Shared/DisplayBlogData/DisplayBlogData";
import SectionButton from "@/components/Shared/SectionButton/SectionButton";
import AllHomeBlogText from "../../../lib/homeBlogText";
import blogImage1 from "../../../../public/images/HomeBlog/Card 01.png";
import blogImage2 from "../../../../public/images/HomeBlog/Card 02.png";
import blogImage3 from "../../../../public/images/HomeBlog/Card 03.png";

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
  } = AllHomeBlogText;

  return (
    <div className="px-1">
      {/* home blog section title */}
      <h2 className="md:text-2xl text-lg font-bold mb-2 text-[#040404] text-center ">
        {TITLE}
      </h2>
      {/* home blog section description */}
      <p className="text-[#535552] text-center">{DESC}</p>

      {/* Home blog all filter */}
      <div className="flex lg:gap-5 gap-1 justify-center mt-10 overflow-x-auto">
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1 ml-[290px] md:ml-[455px] lg:ml-[250px] xl:ml-0">
          {WEDDING}
        </button>
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1">
          {CORPORATE_BLOG}
        </button>
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1">
          {ENGAGEMENT_CEREMONY}
        </button>
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1">
          {PARTIES}
        </button>
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1">
          {TEAM_BUILDING}
        </button>
        <button className="bg-white rounded-none btn  md:rounded-l-full md:rounded-r-full border-[#BCBFBA] md:px-8 md:py-2 hover:bg-primary-color active:bg-primary-color border md:border-2  text-[#040404] md:text-xl text-sm p-1">
          {PHOTO_SHOOTS}
        </button>
      </div>

      {/* display blog data here*/}
      <div className="grid grid-cols-2  lg:grid-cols-3 items-center gap-2 md:gap-10 lg:gap-5 xl:gap-10 md:mt-10 mt-5">
        {/* {data?.slice(0, 3).map((i) => (
          <DisplayBlogData key={i._id} data={i}></DisplayBlogData>
        ))} */}

        <DisplayBlogData data={{ img: blogImage1 }}></DisplayBlogData>
        <DisplayBlogData data={{ img: blogImage2 }}></DisplayBlogData>
        <DisplayBlogData data={{ img: blogImage3 }}></DisplayBlogData>
      </div>

      {/* see more button */}
      <div className="flex justify-center mt-5">
        <SectionButton text={BTN} />
      </div>
    </div>
  );
};

export default HomeBlog;
