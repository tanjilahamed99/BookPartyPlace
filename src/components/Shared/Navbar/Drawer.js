"use client";

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
    BIRTHDAY_PARTY: BIRTHDAY_PARTY_TITLE,
    PHOTO_FILM_SHOOT,
    WORK_SHOP: WORK_SHOP_TITLE,
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

  function toggleBodyOverflow() {
    document.body.classList.toggle("drawer-open");
  }

  return (
    <div className="drawer z-50">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        onClick={toggleBodyOverflow}
      />
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
        <ul className="menu p-4 md:w-80 w-60 min-h-full space-y-2 bg-primary-color text-black">
          {/* Close button */}
          <li className="w-10 ml-40 md:ml-60">
            <label htmlFor="my-drawer" className="cursor-pointer">
              <MdCancel className="text-2xl" />
            </label>
          </li>
          <hr className="border border-black w-60 md:w-80 -ml-4" />

          {/* wedding drawer */}
          <div className="drawer ">
            <input id="my-drawer1" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer1"
                className="drawer-button flex items-center justify-between"
              >
                {WADDING}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu px-2 py-4 md:w-80 w-60 min-h-full  bg-primary-color text-black">
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
                <hr className="border border-black w-60 md:w-80 -ml-2" />
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
                  <Link href={"/"}>{WEDDING_RECEPTION}</Link>
                </li>
                <li>
                  <Link href={"/"}>{WEDDING_VENUES}</Link>
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
          </div>

          {/* parties */}
          <div className="drawer ">
            <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer2"
                className="drawer-button flex items-center justify-between"
              >
                {PARTIES}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu py-4 px-2 md:w-80 w-60 min-h-full bg-primary-color text-black">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer2" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-black w-60 md:w-80 -ml-2" />
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
                  {" "}
                  <Link href={"/"}>{FESTIVAL_PARTY}</Link>
                </li>
                <li>
                  <Link href={"/"}>{HOLI_PARTY}</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>{PRIVATE_PARTY}</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>{HALLOWEEN_PARTY}</Link>
                </li>
                <li>
                  <Link href={"/"}>{DINNER_PLACES}</Link>
                </li>
                <li>
                  <Link href={"/"}>{BACHELORETTE_PARTY}</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>{POOL_PARTY}</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>{ANNIVERSARY_CELEBRATIONS}</Link>
                </li>
                <li>
                  <Link href={"/"}>{OTHER_TYPES_PARTY}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* corporate events */}
          <div className="drawer ">
            <input id="my-drawer3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer3"
                className="drawer-button flex items-center justify-between"
              >
                {CORPORATE_EVENT}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu py-4 px-2 md:w-80 w-60 min-h-full bg-primary-color text-black">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer3" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-black w-60 md:w-80 -ml-2" />
                <li>
                  <Link href={"/"}>{CORPORATE_OUTING}</Link>
                </li>
                <li>
                  <Link href={"/"}>{CORPORATE_PARTY}</Link>
                </li>
                <li>
                  <Link href={"/"}>{CO_WORKING_SPACE}</Link>
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
          </div>

          {/* birthday party */}
          <div className="drawer ">
            <input id="my-drawer4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer4"
                className="drawer-button flex items-center justify-between"
              >
                {BIRTHDAY_PARTY_TITLE}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu py-4 px-2 md:w-80 w-60 min-h-full bg-primary-color text-black">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer4" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-black w-60 md:w-80 -ml-2" />
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
          </div>

          {/* photo/Film_shoot */}
          <div className="drawer ">
            <input id="my-drawer5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer5"
                className="drawer-button flex items-center justify-between"
              >
                {PHOTO_FILM_SHOOT}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 md:w-80 w-60 min-h-full bg-primary-color text-black">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer5" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-black w-60 md:w-80 -ml-4" />
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
          </div>

          {/* work shop */}
          <div className="drawer ">
            <input id="my-drawer6" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer6"
                className="drawer-button flex items-center justify-between"
              >
                {WORK_SHOP_TITLE}
                <MdOutlineKeyboardArrowRight className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label
                htmlFor="my-drawer6"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 md:w-80 w-60 min-h-full bg-primary-color text-black">
                {/* Close button */}
                <ul className="flex justify-between">
                  <li className="">
                    <label htmlFor="my-drawer6" className="cursor-pointer">
                      <IoChevronBackOutline className="text-2xl" />
                    </label>
                  </li>
                  <li className="">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <MdCancel className="text-2xl" />
                    </label>
                  </li>
                </ul>
                <hr className="border border-black w-60 md:w-80 -ml-4" />
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
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
