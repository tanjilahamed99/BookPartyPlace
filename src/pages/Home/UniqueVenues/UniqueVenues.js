import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import AllUniqueVenuesText from "../../../lib/uniqueText";
import uniqueVenuesImg1 from "../../../../public/images/UniqueVenues/Card 01.jpg";
import uniqueVenuesImg2 from "../../../../public/images/UniqueVenues/Card 02.jpg";
import uniqueVenuesImg3 from "../../../../public/images/UniqueVenues/Card 03.jpg";
import uniqueVenuesImg4 from "../../../../public/images/UniqueVenues/Card 04.png";

const UniqueVenues = ({ data }) => {
  const { TITLE } = AllUniqueVenuesText;

  return (
    <div className=" px-1">
      {/* Unique Venues section title */}
      <SectionTitle title={TITLE} />

      {/* sliders for big screen*/}
      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          <DisplayLDataSlider
            view={3.5}
            data={{
              img1:uniqueVenuesImg1,
              img2:uniqueVenuesImg2,
              img3:uniqueVenuesImg3,
              img4:uniqueVenuesImg4
            }}
          />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider
            view={3}
            data={{
              img1:uniqueVenuesImg1,
              img2:uniqueVenuesImg2,
              img3:uniqueVenuesImg3,
              img4:uniqueVenuesImg4
            }}
          />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider
            view={2.3}
            data={{
              img1: uniqueVenuesImg1,
              img2: uniqueVenuesImg2,
              img3: uniqueVenuesImg3,
              img4: uniqueVenuesImg4
            }}
          />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {/* dynamic card data */}
        {/* {data?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))} */}

        {/* static card data */}
        <DisplayLData data={{ img: uniqueVenuesImg1, _id: 1 }} />
        <DisplayLData data={{ img: uniqueVenuesImg2, _id: 2 }} />
        <DisplayLData data={{ img: uniqueVenuesImg3, _id: 3 }} />
        <DisplayLData data={{ img: uniqueVenuesImg4, _id: 4 }} />
      </div>
    </div>
  );
};

export default UniqueVenues;
