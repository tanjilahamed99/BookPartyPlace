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

const TestimonialsSlider = ({ data,view }) => {

    return (
        <div className='relative '>
            <Swiper
                spaceBetween={10}
                slidesPerView={view}
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
                    data.map((i, idx) => <SwiperSlide className='md:py-20 py-10 px-6 md:px-2 lg:px-1' key={idx} data-hash={`slide${idx}}`}>

                        <TestimonialCard data={i} />

                    </SwiperSlide>)
                }

            </Swiper>

            <div className='flex gap-3 left-0 md:left-1 top-[46%] absolute'>
                <button className='custom-swiper-button-prev-testimonial'>
                    <IoIosArrowBack className=" bg-primary-color rounded-full text-4xl p-2" />
                </button>
            </div>

            <div className='flex gap-3 right-0  md:right-1 top-[46%] absolute'>
                <button className='custom-swiper-button-next-testimonial'>
                    <IoIosArrowForward className=" bg-primary-color rounded-full text-4xl p-2" />
                </button>
            </div>

        </div >
    );
};

export default TestimonialsSlider;