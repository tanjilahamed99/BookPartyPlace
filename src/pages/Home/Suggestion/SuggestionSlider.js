"use client";

import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DisplayNData from "@/Shared/DisplayNData/DisplayNData";

const SuggestionSlider = ({ data }) => {
  // keen slider functionality
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3, spacing: 10 },
    range: {
      min: 5,
      max: 10,
    },
  });

  return (
    // suggestion data map for showing card
    <div ref={sliderRef} className="keen-slider">
      {data?.map((i, idx) => (
        <div
          key={i._id}
          className={`keen-slider__slide number-slide${idx} rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}
        >
          <DisplayNData data={i}></DisplayNData>
        </div>
      ))}
    </div>
  );
};

SuggestionSlider.propTypes = {
  data: PropTypes.array,
};

export default SuggestionSlider;
