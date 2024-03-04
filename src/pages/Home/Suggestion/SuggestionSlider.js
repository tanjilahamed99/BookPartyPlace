"use client";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";

const SuggestionSlider = ({ data }) => {
  return (
    // suggestion data map for showing card
    <div>
      {/* dynamic card */}
      {/* {data?.map((i, idx) => (
        <div
          key={i._id}
          className={`keen-slider__slide number-slide${idx} rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
        >
          <DisplayNData data={i}></DisplayNData>
        </div>
      ))} */}

      {/* static card */}

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        onSetTransition={10000}
        className="mySwiper scroll-smooth"
      >
        <SwiperSlide>
          {" "}
          <div className={`rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>
            <DisplayNData data={{ img: data?.img1, type: data?.text1 }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={`rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>
            <DisplayNData data={{ img: data?.img2, type: data?.text2 }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={`rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>
            <DisplayNData data={{ img: data?.img3, type: data?.text3 }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={`rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>
            <DisplayNData data={{ img: data?.img4, type: data?.text4 }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={`rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>
            <DisplayNData data={{ img: data?.img5, type: data?.text5 }} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

SuggestionSlider.propTypes = {
  data: PropTypes.array,
};

export default SuggestionSlider;
