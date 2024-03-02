"use client";

import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DisplayNData from "@/components/Shared/DisplayNData/DisplayNData";

const SuggestionSlider = ({ data }) => {
  // keen slider functionality
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3, spacing: 10 },
    range: {
      min: 5,
      max: 12,
    },
  });

  return (
    // suggestion data map for showing card
    <div ref={sliderRef} className="keen-slider">
      {/* dynamic card */}
      {/* {data?.map((i, idx) => (
        <div
          key={i._id}
          className={`keen-slider__slide number-slide${idx} rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
        >
          <DisplayNData data={{}}></DisplayNData>
        </div>
      ))} */}

      {/* static card */}
      <div
        className={`keen-slider__slide number-slide1 rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
      >
        <DisplayNData data={{ img: data.img1, type: "Farm House" }} />
      </div>
      <div
        className={`keen-slider__slide number-slide2 rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
      >
        <DisplayNData data={{ img: data.img2, type: "Resorts" }} />
      </div>
      <div
        className={`keen-slider__slide number-slide3 rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
      >
        <DisplayNData data={{ img: data.img3, type: "Banquet Hall" }} />
      </div>
      <div
        className={`keen-slider__slide number-slide4 rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
      >
        <DisplayNData data={{ img: data.img4, type: "Party Lawns.jpg" }} />
      </div>
      <div
        className={`keen-slider__slide number-slide5 rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
      >
        <DisplayNData data={{ img: data.img5, type: "Other" }} />
      </div>
    </div>
  );
};

SuggestionSlider.propTypes = {
  data: PropTypes.array,
};

export default SuggestionSlider;
