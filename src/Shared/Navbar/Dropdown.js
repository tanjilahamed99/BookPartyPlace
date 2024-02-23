import Link from "next/link";
import allDropdownText from "./dropDownText";

const Dropdown = () => {
  const { weddingText } = allDropdownText;
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

  return (
    <div
      role="tablist"
      className="tabs tabs-bordered w-[100%] mx-auto justify-center"
    >
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-auto pb-10 font-semibold  text-xl  text-primary-text-gray  w-fit"
        aria-label="Weddings"
      />
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
            <Link href={"/"}>New Year Party</Link>
          </li>
          <li>
            <Link href={"/"}>Christmas Party</Link>
          </li>
          <li>
            <Link href={"/"}>Outdoor venue party</Link>
          </li>
          <li>
            <Link href={"/"}>Festival Prty</Link>
          </li>
          <li>
            <Link href={"/"}>Holi party</Link>
          </li>
          <li>
            <Link href={"/"}>Private party</Link>
          </li>
          <li>
            <Link href={"/"}>Halloween party</Link>
          </li>
          <li>
            <Link href={"/"}>Dinner places</Link>
          </li>
          <li>
            <Link href={"/"}>Bachelor’s/ Bachelorette party</Link>
          </li>
          <li>
            <Link href={"/"}>Pool party</Link>
          </li>
          <li>
            <Link href={"/"}>Anniversary celebrations</Link>
          </li>
          <li>
            <Link href={"/"}>Other Type of Parties</Link>
          </li>
        </ul>
      </div>

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
            <Link href={"/"}>Corporate Outings</Link>
          </li>
          <li>
            <Link href={"/"}>Corporate party</Link>
          </li>
          <li>
            <Link href={"/"}>Co-Working Space</Link>
          </li>
          <li>
            <Link href={"/"}>Conference Halls/Celebrations</Link>
          </li>
          <li>
            <Link href={"/"}>Team Dinner Places</Link>
          </li>
          <li>
            <Link href={"/"}>Team Building</Link>
          </li>
          <li>
            <Link href={"/"}>Team Lunch</Link>
          </li>
          <li>
            <Link href={"/"}>Exibition</Link>
          </li>
          <li>
            <Link href={"/"}>Team Outings</Link>
          </li>
        </ul>
      </div>

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
            <Link href={"/"}>Birthday party</Link>
          </li>
          <li>
            <Link href={"/"}>Kids Birthday party</Link>
          </li>
          <li>
            <Link href={"/"}>1st Birthday party</Link>
          </li>
        </ul>
      </div>

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
            <Link href={"/"}>Photoshoot studio</Link>
          </li>
          <li>
            <Link href={"/"}>Music studios</Link>
          </li>
          <li>
            <Link href={"/"}>Film studios</Link>
          </li>
          <li>
            <Link href={"/"}>Animation studios</Link>
          </li>
          <li>
            <Link href={"/"}>Recording studios</Link>
          </li>
          <li>
            <Link href={"/"}>VFX studios</Link>
          </li>
          <li>
            <Link href={"/"}>Dance studios</Link>
          </li>
        </ul>
      </div>

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
            <Link href={"/"}>Auditoriums</Link>
          </li>
          <li>
            <Link href={"/"}>Tent house</Link>
          </li>
          <li>
            <Link href={"/"}>Work shop</Link>
          </li>
          <li>
            <Link href={"/"}>Seminars</Link>
          </li>
          <li>
            <Link href={"/"}>Ware house</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
