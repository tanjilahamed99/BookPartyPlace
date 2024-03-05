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

  const uniqueVenuesData = [
    {
      img: uniqueVenuesImg1,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:1
    },
    {
      img: uniqueVenuesImg2,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:2
    },
    {
      img: uniqueVenuesImg3,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id:3
    },
    {
      img: uniqueVenuesImg4,
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
      {/* Unique Venues section title */}
      <SectionTitle title={TITLE} />

      {/* sliders for big screen*/}
      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          <DisplayLDataSlider
            view={3.5}
            
            mainData={uniqueVenuesData}
          />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider
            view={3}
           
            mainData={uniqueVenuesData}
          />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider
            view={2.3}
            mainData={uniqueVenuesData}
          />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {/* dynamic card data */}
        {uniqueVenuesData?.map((i,idx) => (
          <DisplayLData key={idx} data={i} />
        ))}
      </div>
    </div>
  );
};

export default UniqueVenues;
