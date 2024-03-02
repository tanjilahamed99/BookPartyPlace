"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";
import eventCategoryImg1 from "../../../../public/images/ExploreEvent/01 Weddings.jpg";
import eventCategoryImg2 from "../../../../public/images/ExploreEvent/02 Birthday party .jpg";
import eventCategoryImg3 from "../../../../public/images/ExploreEvent/03 Festivals.jpg";
import eventCategoryImg4 from "../../../../public/images/ExploreEvent/04 Performances.jpg";
import eventCategoryImg5 from "../../../../public/images/ExploreEvent/05 Family Gatherings .jpg";

const SwiperSlider = ({ data }) => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="relative">
      {/* slider main function and cards */}
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* data facing for display card */}
        {/* dynamic card data */}
        {/* {data?.map((i) => (
          <SwiperSlide key={i._id}>
            <DisplayNData data={i}></DisplayNData>
          </SwiperSlide>
        ))} */}

        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg1 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg2 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg3 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg4 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg5 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg4 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg2 }}></DisplayNData>
        </SwiperSlide>
        <SwiperSlide>
          <DisplayNData data={{ img: eventCategoryImg1 }}></DisplayNData>
        </SwiperSlide>
      </Swiper>

      {/* slider custom button */}
      <div className="flex gap-3  right-5 -top-11 absolute">
        <button className="custom-swiper-button-prev">
          <IoIosArrowBack className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>

        <button className="custom-swiper-button-next">
          <IoIosArrowForward className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>
      </div>
    </div>
  );
};

SwiperSlider.propTypes = {
  data: PropTypes.array,
};

export default SwiperSlider;
