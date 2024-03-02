import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import AllPromotionText from "../../../lib/promotionText";
import promotionImg1 from "../../../../public/images/Promotion/13644697.jpg";
import promotionImg2 from "../../../../public/images/Promotion/13657823.jpg";
import promotionImg3 from "../../../../public/images/Promotion/14748962.jpg";
import promotionImg4 from "../../../../public/images/Promotion/16641032-1261921803893980-1881207079274680241-n_15_92130 1.png";
import promotionImg5 from "../../../../public/images/Promotion/1fyC4BNYjfA.jpg";

const Promotion = ({ data }) => {
  const { TITLE } = AllPromotionText;

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
            data={{
              img1: promotionImg1,
              img2: promotionImg2,
              img3: promotionImg3,
              img4: promotionImg4,
              img5: promotionImg5,
            }}
          />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider
            view={3}
            data={{
              img1: promotionImg1,
              img2: promotionImg2,
              img3: promotionImg3,
              img4: promotionImg4,
              img5: promotionImg5,
            }}
          />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider
            view={2.3}
            data={{
              img1: promotionImg1,
              img2: promotionImg2,
              img3: promotionImg3,
              img4: promotionImg4,
              img5: promotionImg5,
            }}
          />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {/* {data?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))} */}
        <DisplayLData data={{ img: promotionImg1, _id: 1 }} />
        <DisplayLData data={{ img: promotionImg2, _id: 2 }} />
        <DisplayLData data={{ img: promotionImg3, _id: 3 }} />
        <DisplayLData data={{ img: promotionImg4, _id: 4 }} />
      </div>
    </div>
  );
};

export default Promotion;
