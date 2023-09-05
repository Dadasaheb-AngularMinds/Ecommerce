import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carosul3() {
  return (
    <div className="relative py-10 bg-gray-800">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://images.wallpaperscraft.com/image/single/raspberries_blackberries_berries_111698_1280x1280.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://images.wallpaperscraft.com/image/single/mahonia_berries_leaves_976102_1280x1280.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://images.wallpaperscraft.com/image/single/grapes_bunch_wet_400442_1280x1280.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="overflow-hidden p-0">
            <img
              className="h-full overflow-hidden transition-all transition-transform duration-200 bg-cover brightness-90 hover:brightness-100 hover:scale-110"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-40 left-10">
        <p className="text-5xl font-bold text-orange-400">
          Latest Trends <i class="bi bi-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}
