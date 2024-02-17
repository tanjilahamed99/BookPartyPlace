import UseAllSuggestionData from "@/components/Hooks/UseAllSuggestionData";
import DisplayLData from "@/components/DisplayLData/DisplayLData";
import DisplayLDataSlider from "@/components/DisplayLDataSlider/DisplayLDataSlider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";


const Promotion = async () => {

    const promotionData = await UseAllSuggestionData()

    return (
        <div className="my-20">
            {/* <SectionTitle title="Promotions near your area" /> */}

            <div>
                {/* big screen /xl */}
                {/* <div className="hidden xl:inline">
                    <DisplayLDataSlider view={3.5} data={promotionData} />
                </div> */}

                {/* large screen / lg  */}
                {/* <div className="hidden lg:inline xl:hidden">
                    <DisplayLDataSlider view={3} data={promotionData} />
                </div> */}

                {/* medium screen / md */}
                {/* <div className="hidden md:inline lg:hidden">
                    <DisplayLDataSlider view={2.3} data={promotionData} />
                </div> */}
            </div>

            {/* Grid layout for small device  */}
            {/* <div className=" grid grid-cols-2 items-center gap-4 mx-3 md:hidden">
                {
                    promotionData?.map(i => <DisplayLData key={i._id} data={i} />)
                }
            </div> */}

        </div>
    );
};

export default Promotion;