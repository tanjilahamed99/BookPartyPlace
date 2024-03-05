"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialCard from "@/components/Shared/TestimonialCard/TestimonialCard";

const TestimonialsSlider = ({ view, pagination, data }) => {
  return (
    <div className="relative ">
      {/* slider main functionality */}
      <Swiper
        spaceBetween={10}
        slidesPerView={view}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: pagination,
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev-testimonial",
          nextEl: ".custom-swiper-button-next-testimonial",
        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper w-[90%]"
        onSetTransition={1000}
      >
        {/* dynamic testimonial card md:py-20 py-10 px-6 md:px-2 lg:px-1*/}
        {data?.map((i, idx) => (
          <SwiperSlide
            className="py-20"
            key={idx}
            data-hash={`slide${idx}}`}
          >
            <TestimonialCard data={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom arrow button */}
      <div className="md:flex gap-3 left-1 md:left-1 top-[46%] absolute text-black hidden">
        <button className="custom-swiper-button-prev-testimonial">
          <IoIosArrowBack className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>
      </div>

      <div className="md:flex gap-3 right-1  md:right-1 top-[46%] absolute text-black hidden">
        <button className="custom-swiper-button-next-testimonial">
          <IoIosArrowForward className=" bg-primary-color rounded-full text-4xl p-2" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
