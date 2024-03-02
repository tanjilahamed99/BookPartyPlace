import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import AllEventByVenuesText from "../../../lib/eventByVenuesText";
import eventCatagoriesImg1 from "../../../../public/images/Promotion/wtttttrh.jpg";
import eventCatagoriesImg2 from "../../../../public/images/Promotion/unnamed 1.png";
import eventCatagoriesImg3 from "../../../../public/images/Promotion/rnsyr.jpg";
import eventCatagoriesImg4 from "../../../../public/images/Promotion/Mi7CNy9_gCo.jpg";
import eventCatagoriesImg5 from "../../../../public/images/Promotion/images 1.png";

const EventByVenues = ({ data }) => {
  const { TITLE } = AllEventByVenuesText;

  return (
    <div className="">
      <SectionTitle title={TITLE} />

      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          <DisplayLDataSlider
            view={3.5}
            data={{
              img1: eventCatagoriesImg1,
              img2: eventCatagoriesImg2,
              img3: eventCatagoriesImg3,
              img4: eventCatagoriesImg4,
            }}
          />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider
            view={3}
            data={{
              img1: eventCatagoriesImg1,
              img2: eventCatagoriesImg2,
              img3: eventCatagoriesImg3,
              img4: eventCatagoriesImg4,
            }}
          />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider
            view={2.3}
            data={{
              img1: eventCatagoriesImg1,
              img2: eventCatagoriesImg2,
              img3: eventCatagoriesImg3,
              img4: eventCatagoriesImg4,
            }}
          />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {/* {data?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))} */}
        <DisplayLData data={{ img: eventCatagoriesImg1, _id: 1 }} />
        <DisplayLData data={{ img: eventCatagoriesImg2, _id: 2 }} />
        <DisplayLData data={{ img: eventCatagoriesImg3, _id: 3 }} />
        <DisplayLData data={{ img: eventCatagoriesImg4, _id: 4 }} />
      </div>
    </div>
  );
};

export default EventByVenues;
