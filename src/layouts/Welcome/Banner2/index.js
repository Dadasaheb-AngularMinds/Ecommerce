import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay,Navigation } from 'swiper/modules';

export default function Banner2() {
  return (
    <div className="py-10">
      <Swiper navigation={true}
       autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/2_Desktop_Home_CL_050623.jpg"
            class="absolute block w-full h-full top-0 left-0 transition-all duration-300 object-cover bg-black brightness-90 hover:brightness-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/SUMMER_Sunglasses_Desktop_230523.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black brightness-90 hover:brightness-100 transition-all duration-300"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/3_Desktop_Home_Banner_230523.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black brightness-75"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/Desktop_Home_amazon_15623.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black  brightness-75 "
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/SUMMER_Eyeglasses_Desktop_230523.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black opacity-80"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.wallpaperscraft.com/image/single/echeveria_succulent_pot_120694_6000x4000.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black  brightness-75 "
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.wallpaperscraft.com/image/single/vintage_retro_camera_126517_1600x900.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black opacity-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.wallpaperscraft.com/image/single/camera_lens_blur_874060_1600x900.jpg"
            class="absolute block w-full h-full top-0 left-0 object-cover bg-black opacity-80"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
