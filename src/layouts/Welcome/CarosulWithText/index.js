import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function CarosulWithText() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slideText'>
        <img
            className="object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0"
            src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
            alt=""
          />
        </SwiperSlide>
        
         
      </Swiper>
    </>
  );
}
