"use client";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";
import Link from "next/link";

const SuggestionSlider = ({ mainData }) => {
  return (
    // suggestion data map for showing card
    <div>
      <Swiper
        slidesPerView={3.2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        onSetTransition={10000}
        className="mySwiper scroll-smooth"
      >
        {mainData?.map((i, idx) => (
          <SwiperSlide key={idx}>
            <Link href={'/'}>
              <DisplayNData data={i} />
            </Link>
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
