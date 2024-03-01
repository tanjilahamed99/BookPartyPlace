"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DisplayLData from "../DisplayLData/DisplayLData";
import { useGetPhotosQuery } from "@/redux/features/PhotoSlice/photoSlice";

const DisplayLDataSlider = ({ data, view }) => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="relative">
      {/* slider main functionality */}
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={view}
        spaceBetween={20}
        navigation={{
          prevEl: ".custom-swiper-button-prev-lData",
          nextEl: ".custom-swiper-button-next-lData",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* data facing for display card */}
        {data?.map((i, idx) => (
          <SwiperSlide key={i._id}>
            <DisplayLData data={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom arrow Button */}
      <div className="flex gap-3  right-5 -top-11 absolute">
        <button className="custom-swiper-button-prev-lData">
          <IoIosArrowBack className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>

        <button className="custom-swiper-button-next-lData">
          <IoIosArrowForward className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>
      </div>
    </div>
  );
};

export default DisplayLDataSlider;
