import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import AllPromotionText from "../../../lib/promotionText";
import promotionImg1 from "../../../../public/images/Promotion/13644697.jpg";
import promotionImg2 from "../../../../public/images/Promotion/13657823.jpg";
import promotionImg3 from "../../../../public/images/Promotion/14748962.jpg";
import promotionImg4 from "../../../../public/images/Promotion/16641032-1261921803893980-1881207079274680241-n_15_92130 1.png";

const Promotion = ({ data }) => {
  const { TITLE } = AllPromotionText;

  const promotionData = [
    {
      img: promotionImg1,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:1
    },
    {
      img: promotionImg2,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:2
    },
    {
      img: promotionImg3,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:3
    },
    {
      img: promotionImg4,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:4
    },
  ];

  return (
    <div className=" px-1">
      {/* promotion section title */}
      <SectionTitle title={TITLE} />

      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          {/* <DisplayLDataSlider view={3.5} data={data} /> */}

          <DisplayLDataSlider
            view={3.5}
            mainData={promotionData}
          />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider
            view={3}
           mainData={promotionData}
          />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider
            view={2.3}
            mainData={promotionData}
          />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {promotionData?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Promotion;
