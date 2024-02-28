import Link from "next/link";
import allDropdownText from "./dropDownText";

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
    <div
      role="tablist"
      className="tabs tabs-bordered w-[100%] mx-auto justify-center"
    >
      {/* wadding navigation */}
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray  w-fit"
        aria-label="Weddings"
      />

      {/* wadding navigation link */}
      <div role="tabpanel" className="tab-content py-10 w-full ">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404] w-full">
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray flex justify-center w-fit"
        aria-label="Parties"
      />
      <div role="tabpanel" className="tab-content py-10 w-full">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404]">
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray flex justify-center w-fit"
        aria-label="Corporate Events"
      />
      <div role="tabpanel" className="tab-content py-10 w-full">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404]">
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray flex justify-center w-fit"
        aria-label="Birthday Party"
      />
      <div role="tabpanel" className="tab-content py-10 w-full">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404]">
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray flex justify-center w-fit"
        aria-label="Photo/ Filmshoot"
      />
      <div role="tabpanel" className="tab-content py-10 w-full">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404]">
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray flex justify-center w-fit"
        aria-label="Workshop"
      />
      <div role="tabpanel" className="tab-content py-10 w-full">
        <ul className="grid grid-cols-3 gap-4 text-lg text-[#040404]">
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
