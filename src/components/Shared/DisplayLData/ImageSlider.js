"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

const ImageSlider = ({ data, id }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `.custom-swiper-button-prev-${id}`,
          nextEl: `.custom-swiper-button-next-${id}`,
        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide data-hash="slide1">
          {/* image component */}
          <ImageComponent
            src={data?.img}
            height="h-[200px]"
            mdHeight={"h-[200px]"}
            width="w-full"
            nHeight={"h-[120px]"}
          />
        </SwiperSlide>

        {/* slider 2 */}
        <SwiperSlide data-hash="slide1">
          {/* image component */}
          <ImageComponent
            src={data?.img}
            height="h-[200px]"
            mdHeight={"h-[200px]"}
            width="w-full"
            nHeight={"h-[120px]"}
          />
        </SwiperSlide>

        {/* slider 3 */}
        <SwiperSlide data-hash="slide1">
          {/* image component */}
          <ImageComponent
            src={data?.img}
            height="h-[200px]"
            mdHeight={"h-[200px]"}
            width="w-full"
            nHeight={"h-[120px]"}
          />
        </SwiperSlide>
      </Swiper>

      {/* custom slider button */}
      <div className="flex gap-3 md:left-5 left-1 md:top-24 top-[50px] absolute z-10 text-black">
        <button className={`custom-swiper-button-prev-${id}`}>
          <IoIosArrowBack className=" bg-primary-color rounded-full md:text-4xl md:p-2 p-1 text-2xl" />
        </button>
      </div>

      <div className="flex gap-3 md:right-5 right-1 md:top-24 top-[50px]  absolute z-10 text-black">
        <button className={`custom-swiper-button-next-${id}`}>
          <IoIosArrowForward className=" bg-primary-color rounded-full md:text-4xl md:p-2 p-1 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
