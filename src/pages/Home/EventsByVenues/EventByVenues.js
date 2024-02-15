import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import DisplayLData from "@/components/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const EventByVenues = async() => {

    const eventData = await UseAllSuggestionData()

    return (
        <div className="my-20">
            <SectionTitle title="Promotions near your area" />

            <div>
                {/* big screen /xl */}
                <div className="hidden xl:inline">
                    <DisplayLDataSlider view={3.5} data={eventData} />
                </div>

                {/* large screen / lg  */}
                <div className="hidden lg:inline xl:hidden">
                    <DisplayLDataSlider view={3} data={eventData} />
                </div>

                {/* medium screen / md */}
                <div className="hidden md:inline lg:hidden">
                    <DisplayLDataSlider view={2.3} data={eventData} />
                </div>
            </div>

            {/* Grid layout for small device  */}
            <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
                {
                    eventData?.map(i => <DisplayLData key={i._id} data={i} />)
                }
            </div>

        </div>
    );
};

export default EventByVenues;