"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
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
        {/* dynamic testimonial card */}
        {data?.map((i, idx) => (
          <SwiperSlide
            className="md:py-20 py-10 px-6 md:px-2 lg:px-1"
            key={idx}
            data-hash={`slide${idx}}`}
          >
            {/* <div className="border-[#BCBFBA] border relative">
              <Image
                className="absolute rounded-full md:w-32 md:h-32 md:-top-20 -top-10 xl:left-[32%] lg:left-[28%] md:left-[30%] left-[33%] z-10 h-20 w-20"
                src={i?.img?.src}
                alt="testimonials image"
                width={500}
                height={500}
              />

              <div className="text-center md:pt-14 pt-12  px-2 pb-5 space-y-2">
                <div>
                  <h2 className="text-[#040404] font-semibold">{data?.name}</h2>
                  <h2 className="text-sm text-[#040404]">{data?.position}</h2>
                </div>
                <p className="text-[#535552] text-sm md:text-base">
                  {data?.desc}
                </p>
                <Rating
                  placeholderRating={data?.rating}
                  emptySymbol={<IoIosStarOutline />}
                  placeholderSymbol={<IoIosStar />}
                  fullSymbol={<IoIosStar />}
                  className="text-[#FFBE00] text-xl "
                />
              </div>
            </div> */}

            <TestimonialCard data={i}/>
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
