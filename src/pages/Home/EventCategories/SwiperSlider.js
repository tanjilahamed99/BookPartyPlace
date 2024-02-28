"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DisplayNData from "@/Shared/DisplayNData/DisplayNData";

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
        {data?.map((i) => (
          <SwiperSlide key={i._id}>
            <DisplayNData data={i}></DisplayNData>
          </SwiperSlide>
        ))}
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
