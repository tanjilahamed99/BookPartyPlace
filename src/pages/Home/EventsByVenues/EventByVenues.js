import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/DisplayBlogData/SectionTitle/SectionTitle";
import AllEventByVenuesText from "../../../lib/eventByVenuesText";
import eventCatagoriesImg1 from "../../../../public/images/Promotion/wtttttrh.jpg";
import eventCatagoriesImg2 from "../../../../public/images/Promotion/unnamed 1.png";
import eventCatagoriesImg3 from "../../../../public/images/Promotion/rnsyr.jpg";
import eventCatagoriesImg4 from "../../../../public/images/Promotion/Mi7CNy9_gCo.jpg";

const EventByVenues = ({ data }) => {
  const { TITLE } = AllEventByVenuesText;

  const eventByVenuesData = [
    {
      img: eventCatagoriesImg1,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id: 1,
    },
    {
      img: eventCatagoriesImg2,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id: 2,
    },
    {
      img: eventCatagoriesImg3,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id: 3,
    },
    {
      img: eventCatagoriesImg4,
      title: "Party Place",
      rating: 4.5,
      location: "Kukkatpally, Hyderabad, TS",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      people: "200-300",
      price: 50000,
      _id: 4,
    },
  ];

  return (
    <div className="px-1">
      <SectionTitle title={TITLE} />

      <div>
        {/* big screen /xl */}
        <div className="hidden xl:inline">
          <DisplayLDataSlider view={3.5} mainData={eventByVenuesData} />
        </div>

        {/* large screen / lg  */}
        <div className="hidden lg:inline xl:hidden">
          <DisplayLDataSlider view={3} mainData={eventByVenuesData} />
        </div>

        {/* medium screen / md */}
        <div className="hidden md:inline lg:hidden">
          <DisplayLDataSlider view={2.3} mainData={eventByVenuesData} />
        </div>
      </div>

      {/* Grid layout for small device  */}
      <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
        {eventByVenuesData?.map((i) => (
          <DisplayLData key={i._id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default EventByVenues;
