import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import DisplayLData from "@/components/Shared/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/Shared/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const UniqueVenues = async () => {

    const sliderData = await UseAllSuggestionData()

    return (
        <div className="my-20">
            <SectionTitle title="Unique Venues for you" />

            {/* sliders for big screen*/}
            <div>
                {/* big screen /xl */}
                <div className="hidden xl:inline">
                    <DisplayLDataSlider view={3.5} data={sliderData} />
                </div>

                {/* large screen / lg  */}
                <div className="hidden lg:inline xl:hidden">
                    <DisplayLDataSlider view={3} data={sliderData} />
                </div>

                {/* medium screen / md */}
                <div className="hidden md:inline lg:hidden">
                    <DisplayLDataSlider view={2.3} data={sliderData} />
                </div>
            </div>

            {/* Grid layout for small device  */}
            <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
                {
                    sliderData?.map(i => <DisplayLData key={i._id} data={i}/>)
                }
            </div>

        </div>
    );
};

export default UniqueVenues;