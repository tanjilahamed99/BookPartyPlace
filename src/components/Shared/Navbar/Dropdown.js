import Link from "next/link";
import allDropdownText from "../../../lib/dropDownText";

const Dropdown = () => {
  // All the navigation text
  const {
    weddingText,
    birthdayParty,
    corporate,
    partiesText,
    photoFilmShoot,
    workshop,
  } = allDropdownText;

  // Wedding text
  const {
    PELLI_KODUKU,
    PELLI_KUTHURU,
    WEDDING_CEREMONY,
    WEDDING_RECEPTION,
    WEDDING_VENUES,
    MEHENDI_CELEBRATION,
    HALDI_EVENT,
    RING_CEREMONY,
    HONEYMOON_PLACES,
    KALYANA_MANDAPAM,
    INDIAN_SANGEET_WEDDING,
    PRE_WEDDING_CEREMONY,
  } = weddingText;

  // workshop text
  const { AUDITORIUMS, TENT_HOUSE, WORK_SHOP, SEMINARS, WARE_HOUSE } = workshop;

  // BirthdayParty text
  const { BIRTHDAY_PARTY, KIDS_BIRTHDAY, FIRST_BIRTHDAY } = birthdayParty;

  // Corporate text
  const {
    CORPORATE_OUTING,
    CORPORATE_PARTY,
    CO_WORKING_SPACE,
    CONFERENCE,
    TEAM_DINNER,
    TEAM_BUILDING,
    TEAM_LUNCH,
    EXIBITION,
    TEAM_OUTINGS,
  } = corporate;

  // Parties text
  const {
    NEW_YEAR_PARTY,
    CHRISTMAS_PARTY,
    OUTDOOR_VENUE_PARTY,
    FESTIVAL_PARTY,
    HOLI_PARTY,
    PRIVATE_PARTY,
    HALLOWEEN_PARTY,
    DINNER_PLACES,
    BACHELORETTE_PARTY,
    POOL_PARTY,
    ANNIVERSARY_CELEBRATIONS,
    OTHER_TYPES_PARTY,
  } = partiesText;

  // Photo Film Shoot text
  const {
    PHOTO_SHOOT_STUDIO,
    MUSIC_STUDIES,
    FILM_STUDIOS,
    ANIMATION_STUDIOS,
    RECORDING_STUDIOS,
    VFX_STUDIOS,
    DANCE_STUDIOS,
  } = photoFilmShoot;

  return (
    <div className="flex gap-5 overflow-x-clip">
      {/* wadding navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Weddings
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[880px]   grid grid-cols-3  text-[#040404] group-hover:left-0 gap-3"
        >
          <li>
            <Link href={"/"}>{PELLI_KODUKU}</Link>
          </li>
          <li>
            <Link href={"/"}>{PELLI_KUTHURU}</Link>
          </li>
          <li>
            <Link href={"/"}>{WEDDING_CEREMONY}</Link>
          </li>
          <li>
            <Link href={"/"}>{WEDDING_VENUES}</Link>
          </li>
          <li>
            <Link href={"/"}>{WEDDING_RECEPTION}</Link>
          </li>
          <li>
            <Link href={"/"}>{MEHENDI_CELEBRATION}</Link>
          </li>
          <li>
            <Link href={"/"}>{HALDI_EVENT}</Link>
          </li>
          <li>
            <Link href={"/"}>{RING_CEREMONY}</Link>
          </li>
          <li>
            <Link href={"/"}>{HONEYMOON_PLACES}</Link>
          </li>
          <li>
            <Link href={"/"}>{KALYANA_MANDAPAM}</Link>
          </li>
          <li>
            <Link href={"/"}>{INDIAN_SANGEET_WEDDING}</Link>
          </li>
          <li>
            <Link href={"/"}>{PRE_WEDDING_CEREMONY}</Link>
          </li>
        </ul>
      </div>

      {/* Parties navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Parties
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[880px]  grid grid-cols-3 gap-3 text-[#040404] group-hover:-left-32"
        >
          <li>
            <Link href={"/"}>{NEW_YEAR_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{CHRISTMAS_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{OUTDOOR_VENUE_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{FESTIVAL_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{HOLI_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{PRIVATE_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{HALLOWEEN_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{DINNER_PLACES}</Link>
          </li>
          <li>
            <Link href={"/"}>{BACHELORETTE_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{POOL_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{ANNIVERSARY_CELEBRATIONS}</Link>
          </li>
          <li>
            <Link href={"/"}>{OTHER_TYPES_PARTY}</Link>
          </li>
        </ul>
      </div>

      {/* Corporate Events navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Corporate Events
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[880px]  grid grid-cols-3 gap-3 text-[#040404] group-hover:-left-56"
        >
          <li>
            <Link href={"/"}>{CORPORATE_OUTING}</Link>
          </li>
          <li>
            <Link href={"/"}>{CORPORATE_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>Co-{CO_WORKING_SPACE}</Link>
          </li>
          <li>
            <Link href={"/"}>{CONFERENCE}</Link>
          </li>
          <li>
            <Link href={"/"}>{TEAM_DINNER}</Link>
          </li>
          <li>
            <Link href={"/"}>{TEAM_BUILDING}</Link>
          </li>
          <li>
            <Link href={"/"}>{TEAM_LUNCH}</Link>
          </li>
          <li>
            <Link href={"/"}>{EXIBITION}</Link>
          </li>
          <li>
            <Link href={"/"}>{TEAM_OUTINGS}</Link>
          </li>
        </ul>
      </div>

      {/* Birthday Party navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Birthday Party
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow  bg-base-100 rounded-box w-[880px]  grid grid-cols-3 gap-3 text-[#040404] group-hover:-right-80"
        >
          <li>
            <Link href={"/"}>{BIRTHDAY_PARTY}</Link>
          </li>
          <li>
            <Link href={"/"}>{KIDS_BIRTHDAY}</Link>
          </li>
          <li>
            <Link href={"/"}>{FIRST_BIRTHDAY}</Link>
          </li>
        </ul>
      </div>

      {/* Photo/ Filmshoot navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Photo/ Filmshoot
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[880px]  grid grid-cols-3 gap-3 text-[#040404] group-hover:-right-32"
        >
          <li>
            <Link href={"/"}>{PHOTO_SHOOT_STUDIO}</Link>
          </li>
          <li>
            <Link href={"/"}>{MUSIC_STUDIES}</Link>
          </li>
          <li>
            <Link href={"/"}>{FILM_STUDIOS}</Link>
          </li>
          <li>
            <Link href={"/"}>{ANIMATION_STUDIOS}</Link>
          </li>
          <li>
            <Link href={"/"}>{RECORDING_STUDIOS}</Link>
          </li>
          <li>
            <Link href={"/"}>{VFX_STUDIOS}</Link>
          </li>
          <li>
            <Link href={"/"}>{DANCE_STUDIOS}</Link>
          </li>
        </ul>
      </div>

      {/* Workshop navigation */}
      <div className="dropdown dropdown-hover  group">
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold  text-xl  text-primary-text-gray p-2 border-b-2 border-white hover:border-primary-color focus:border-primary-color"
        >
          Workshop
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[880px]  grid grid-cols-3 gap-3 text-[#040404] group-hover:right-0"
        >
          <li>
            <Link href={"/"}>{AUDITORIUMS}</Link>
          </li>
          <li>
            <Link href={"/"}>{TENT_HOUSE}</Link>
          </li>
          <li>
            <Link href={"/"}>{WORK_SHOP}</Link>
          </li>
          <li>
            <Link href={"/"}>{SEMINARS}</Link>
          </li>
          <li>
            <Link href={"/"}>{WARE_HOUSE}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
