import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import DisplayBlogData from "@/components/DisplayBlogData/DisplayBlogData";
import SectionButton from "@/components/SectionButton/SectionButton";

const HomeBlog = async () => {

    const blogData = await UseAllSuggestionData()

    return (
        <div>
            <h2 className='md:text-2xl text-lg font-bold mb-2 text-[#040404] text-center '>Checkout our Blogs</h2>
            <p className="text-[#535552] text-center">
                get Inspired with the latest Trends and advice from our experts
            </p>

            {/* filter */}
            <div className="flex gap-5 flex-wrap justify-center mt-5">
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
                <button
                    className="bg-white rounded-l-full rounded-r-full border-[#BCBFBA] px-8 py-2 active:bg-primary-color border-2  text-[#040404] text-xl">
                    Wedding
                </button>
            </div>

            {/* display blog data here*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:gap-5 xl:gap-10 mt-10">
                {
                    blogData?.slice(0, 3).map(i => <DisplayBlogData key={i._id} data={i}></DisplayBlogData>)
                }

            </div>

            {/* see more button */}
            <div className="flex justify-center mt-5">
                <SectionButton text={'See More'} />
            </div>
        </div>
    );
};

export default HomeBlog;