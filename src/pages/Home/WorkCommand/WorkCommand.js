import workCommandAllText from "../../../lib/workCommandText";

// work command section all the text
const WorkCommand = () => {
  const {
    TITLE,
    ONE,
    ONE_DESC,
    ONE_TITLE,
    TWO,
    TWO_DESC,
    TWO_TITLE,
    THREE,
    THREE_DESC,
    THREE_TITLE,
  } = workCommandAllText;

  return (
    <div className="">
      {/* work command section title */}
      <h2 className="text-2xl font-bold mb-3 text-[#040404] text-center">
        {TITLE}
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-20 mt-10">
          {/* command 1 */}
          <div className="text-center space-y-3">
            <h2 className="bg-black border-2 border-primary-color  text-primary-color  flex justify-center text-3xl items-center h-[72px] w-20 rounded-full mx-auto">
              {ONE}
            </h2>
            <h2 className="text-xl text-[#040404] font-semibold">
              {ONE_TITLE}
            </h2>
            <p className="text-[#535552] px-10">{ONE_DESC}</p>
          </div>

          {/* command 2 */}
          <div className="text-center space-y-3">
            <h2 className="bg-black border-2 border-primary-color  text-primary-color  flex justify-center text-3xl items-center h-[72px] w-20 rounded-full mx-auto">
              {TWO}
            </h2>
            <h2 className="text-xl text-[#040404] font-semibold">
              {TWO_TITLE}
            </h2>
            <p className="text-[#535552] px-10 ">{TWO_DESC}</p>
          </div>

          {/* command 3 */}
          <div className="text-center space-y-3">
            <h2 className="bg-black border-2 border-primary-color  text-primary-color  flex justify-center text-3xl items-center h-[72px] w-20 rounded-full mx-auto">
              {THREE}
            </h2>
            <h2 className="text-xl text-[#040404] font-semibold">
              {THREE_TITLE}
            </h2>
            <p className="text-[#535552]  px-10">{THREE_DESC}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCommand;
