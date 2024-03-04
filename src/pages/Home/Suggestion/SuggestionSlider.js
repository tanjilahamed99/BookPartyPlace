"use client";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";

const SuggestionSlider = ({mainData }) => {
  return (
    // suggestion data map for showing card
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        onSetTransition={10000}
        className="mySwiper scroll-smooth"
      >
        {mainData?.map((i, idx) => (
          <SwiperSlide key={idx}>
            <div className={`md:rounded-2xl md:shadow-2xl shadow md:shadow-[#0404041A] md:py-4 py-3`}>
              <DisplayNData data={i} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SuggestionSlider.propTypes = {
  data: PropTypes.array,
};

export default SuggestionSlider;
