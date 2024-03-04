import Link from "next/link";
import AllHomeAboutText from "../../../lib/homeAboutText";

const HomeAbout = () => {
  // Home About section title
  const { bookingPartyPlace, trending, vendors, location, biggestEvents } =
    AllHomeAboutText;

  const {
    BOOKING_TITLE,
    WEDDING,
    PARTIES,
    CORPORATE,
    EVENTS,
    BIRTHDAY_PARTY,
    PHOTO,
    FILM_SHOOT,
    WORK_SHOP,
  } = bookingPartyPlace;

  const {
    TRENDING_TITLE,
    CORPORATE_OUTING,
    CORPORATE_PARTY,
    CO_WORKING_SPACE,
    CONFERENCE_HALLS,
    CELEBRATIONS,
    TEAM_DINNER_PLACES,
    TEAM_BUILDING,
    TEAM_LUNCH,
    EXIBITINO,
    TEAM_OUTING,
  } = trending;

  const {
    VENDORS_TITLE,
    CATERERS,
    WEDDING_DJ,
    PANDITS,
    WEDDING_VIDEO_GRAPHY,
    WEDDING_DECORATORS,
    WEDDING_CHOROGRAPHY,
    PHOTO_BOOTH,
    WEDDING_INVITATIONS,
    WEDDING_GIFTS,
    WEDDING_TRANSPORTATION,
    FLORISTS,
    WEDDING_CAKE,
    CARE_TAKERS,
  } = vendors;

  const { BIGGEST_EVENTS_TITLE } = biggestEvents;

  const {
    LOCATION_TITLE,
    HYDERABAD,
    HI_TECH_CITY,
    SR_NAGAR,
    GACHIBOWLI,
    KUKATPALLY,
    MEHANDIPATNAM,
    MEDCHAL,
    AS_RAO_NAGAR,
    OLD_CITY,
    LAKDIKAPUL,
  } = location;

  return (
    <div className=" space-y-5 px-5">
      {/* about-1 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {BOOKING_TITLE}
        </h2>
        <p className="text-[#616872] space-x-[2px] font-medium">
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
        </p>
      </div>

      {/* about-2 */}
      {/* trending */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {TRENDING_TITLE}
        </h2>
        <p className="text-[#616872] space-x-[2px]">
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CORPORATE_OUTING}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CORPORATE_PARTY}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CO_WORKING_SPACE}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CONFERENCE_HALLS}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CELEBRATIONS}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {TEAM_DINNER_PLACES}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {TEAM_BUILDING}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {TEAM_LUNCH}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {EXIBITINO}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {TEAM_OUTING}
          </Link>
        </p>
      </div>

      {/* about-3 */}
      {/* vendors */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {VENDORS_TITLE}
        </h2>
        <p className="text-[#616872] font-medium space-x-[2px]">
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CATERERS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_DJ}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {PANDITS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_VIDEO_GRAPHY}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_DECORATORS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_CHOROGRAPHY}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {PHOTO_BOOTH}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_INVITATIONS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_GIFTS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_TRANSPORTATION}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {FLORISTS}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {WEDDING_CAKE}{" "}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {CARE_TAKERS}{" "}
          </Link>
        </p>
      </div>

      {/* about-4 */}
      {/* biggest event */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536]">
          {BIGGEST_EVENTS_TITLE}
        </h2>
        <p className="text-[#616872] space-x-[2px] font-medium">
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WEDDING}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PARTIES}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {CORPORATE}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {EVENTS}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {BIRTHDAY_PARTY}
          </Link>
          ,
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {PHOTO}
          </Link>
          /
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {FILM_SHOOT}
          </Link>
          <Link className="hover:font-semibold cursor-pointer" href={"/"}>
            {" "}
            {WORK_SHOP}
          </Link>
        </p>
      </div>
      {/* about-5 */}
      {/* location  */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#393536] ">
          {LOCATION_TITLE}
        </h2>
        <p className="text-[#616872] font-medium space-x-[2px] flex flex-wrap">
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {HYDERABAD}:
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {HI_TECH_CITY},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {SR_NAGAR},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {GACHIBOWLI},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {KUKATPALLY},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {MEHANDIPATNAM},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {MEDCHAL},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {AS_RAO_NAGAR},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {OLD_CITY},
          </Link>
          <Link href={"/"} className="hover:font-semibold cursor-pointer">
            {LAKDIKAPUL}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
