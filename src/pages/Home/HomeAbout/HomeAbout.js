import AllHomeAboutText from "../../../lib/homeAboutText";

const HomeAbout = () => {

  // Home About section title
  const {
    BOOKING_DESC,
    BOOKING_TITLE,
    LOCATION_DESC,
    LOCATION_TITLE,
    TRENDING_DESC,
    TRENDING_TITLE,
    VENDORS_DESC,
    VENDORS_TITLE,
    BIGGEST_EVENTS_DESC,
    BIGGEST_EVENTS_TITLE,
  } = AllHomeAboutText;

  return (
    <div className="my-20 space-y-5 px-5">
      {/* about-1 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {BOOKING_TITLE}
        </h2>
        <p className="text-[#616872]">{BOOKING_DESC}</p>
      </div>
      {/* about-2 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {TRENDING_TITLE}
        </h2>
        <p className="text-[#616872]">{TRENDING_DESC}</p>
      </div>
      {/* about-3 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {VENDORS_TITLE}
        </h2>
        <p className="text-[#616872]">{VENDORS_DESC}</p>
      </div>
      {/* about-4 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {BIGGEST_EVENTS_TITLE}
        </h2>
        <p className="text-[#616872]">{BIGGEST_EVENTS_DESC}</p>
      </div>
      {/* about-5 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {LOCATION_TITLE}
        </h2>
        <p className="text-[#616872]">{LOCATION_DESC}</p>
      </div>
    </div>
  );
};

export default HomeAbout;
