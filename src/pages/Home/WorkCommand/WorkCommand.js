
const WorkCommand = () => {
    return (
        <div className="my-20">
            <h2 className='text-2xl font-bold mb-3 text-[#040404] text-center'>How it Works</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-20 mt-10">
                    {/* command 1 */}
                    <div className="text-center space-y-3">
                        <h2 className="bg-black border-2 border-primary-color rounded-full text-primary-color  flex justify-center text-3xl items-center h-20 w-20 mx-auto">
                            1
                        </h2>
                        <h2 className="text-xl text-[#040404] font-semibold">Find the Perfect Space</h2>
                        <p className="text-[#535552] px-10">
                            Browse through a variety of venues and tailors you search to your activity needs
                        </p>
                    </div>
                    {/* command 2 */}
                    <div className="text-center space-y-3">
                        <h2 className="bg-black border-2 border-primary-color rounded-full text-primary-color  flex justify-center text-3xl items-center h-20 w-20 mx-auto">
                            2
                        </h2>
                        <h2 className="text-xl text-[#040404] font-semibold">Book it with ease</h2>
                        <p className="text-[#535552] px-10 ">
                            When find a perfect match book the space and we will reach you out to know more
                        </p>
                    </div>
                    {/* command 3 */}
                    <div className="text-center space-y-3">
                        <h2 className="bg-black border-2 border-primary-color rounded-full text-primary-color  flex justify-center text-3xl items-center h-20 w-20 mx-auto">
                            3
                        </h2>
                        <h2 className="text-xl text-[#040404] font-semibold">Create Memories</h2>
                        <p className="text-[#535552]  px-10">
                        Create a memoriable experience at a lovely space and enjoy
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkCommand;