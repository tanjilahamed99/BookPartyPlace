"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const SuggestionSlider = ({ data }) => {


    // console.log(sData)

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 3, spacing: 5 },
        range: {
            min: 5,
            max: 10,
        },
    })

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className={`keen-slider__slide number-slide1`}>1</div>

            {
                data?.map((i, idx) => <div key={i._id} className={`keen-slider__slide number-slide${idx} rounded-2xl shadow-2xl shadow-[#0404041A] py-4`}>


                    <Link href={'/'}>
                        <div className='rounded-2xl shadow-2xl shadow-[#0404041A] py-4'>
                            <Image className='md:w-[250px] md:h-[250px] w-[100px]  h-[120px] rounded-t-2xl mx-auto' src={i?.img} alt='suggestion image' height={500} width={500} />
                            <h2 className='text-center md:text-xl text-[10px] mt-3'>{i?.roomType}</h2>
                        </div>
                    </Link>

                </div>)
            }
        </div>
    );
};

export default SuggestionSlider;