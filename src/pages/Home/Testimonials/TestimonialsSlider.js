"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import TestimonialCard from '@/components/Shared/TestimonialCard/TestimonialCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TestimonialsSlider = ({ data }) => {

    return (
        <div className='relative '>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.custom-swiper-button-prev-testimonial',
                    nextEl: '.custom-swiper-button-next-testimonial'
                }}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper w-[90%]"
            >

                {
                    data.map((i, idx) => <SwiperSlide className='py-20' key={idx} data-hash={`slide${idx}}`}>

                        <TestimonialCard data={i} />

                    </SwiperSlide>)
                }

            </Swiper>

            <div className='flex gap-3  left-0 top-[46%] absolute'>
                <button className='custom-swiper-button-prev-testimonial'>
                    <IoIosArrowBack className=" bg-primary-color rounded-full text-4xl p-2" />
                </button>
            </div>

            <div className='flex gap-3  right-0 top-[46%] absolute'>
                <button className='custom-swiper-button-next-testimonial'>
                    <IoIosArrowForward className=" bg-primary-color rounded-full text-4xl p-2" />
                </button>
            </div>

        </div >
    );
};

export default TestimonialsSlider;