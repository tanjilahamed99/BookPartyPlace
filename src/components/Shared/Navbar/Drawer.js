import allNavText from "@/lib/allNavText";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import allDropdownText from "@/lib/dropDownText";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Drawer = () => {
  const {
    WADDING,
    PARTIES,
    CORPORATE_EVENT,
    BIRTHDAY_PARTY,
    PHOTO_FILM_SHOOT,
    WORK_SHOP,
  } = allNavText;

  const {
    weddingText,
    partiesText,
    corporate,
    workshop,
    photoFilmShoot,
    birthdayParty,
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
  //   const { AUDITORIUMS, TENT_HOUSE, WORK_SHOP, SEMINARS, WARE_HOUSE } = workshop;

  // BirthdayParty text
  //   const { BIRTHDAY_PARTY, KIDS_BIRTHDAY, FIRST_BIRTHDAY } = birthdayParty;

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
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <HiMenuAlt2 className="text-2xl font-bold"></HiMenuAlt2>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 w-60 min-h-full bg-base-200 text-base-content space-y-2">
          {/* Close button */}
          <li className="w-10 ml-40 md:ml-60">
            <label htmlFor="my-drawer" className="cursor-pointer">
              <MdCancel className="text-2xl" />
            </label>
          </li>
          <hr className="border border-primary-text-gray" />

          {/* wedding drawer */}
          <div className="drawer z-30">
            <input id="my-drawer1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer1" className="drawer-button">
                {WADDING}
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 md:w-80 w-60 min-h-full bg-base-200 text-base-content">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer1" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-primary-text-gray" />
                <li><Link href={'/'}>{PELLI_KODUKU}</Link></li>
                <li><Link href={'/'}>{PELLI_KUTHURU}</Link></li>
                <li><Link href={'/'}>{ WEDDING_CEREMONY}</Link></li>
                <li><Link href={'/'}>{WEDDING_RECEPTION}</Link></li>
                <li><Link href={'/'}>{WEDDING_VENUES}</Link></li>
                <li><Link href={'/'}>{ MEHENDI_CELEBRATION}</Link></li>
                <li><Link href={'/'}>{HALDI_EVENT}</Link></li>
                <li><Link href={'/'}>{RING_CEREMONY}</Link></li>
                <li><Link href={'/'}>{HONEYMOON_PLACES}</Link></li>
                <li><Link href={'/'}>{KALYANA_MANDAPAM}</Link></li>
                <li><Link href={'/'}>{INDIAN_SANGEET_WEDDING}</Link></li>
                <li><Link href={'/'}>{PRE_WEDDING_CEREMONY}</Link></li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
