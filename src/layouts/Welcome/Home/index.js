// import React from 'react'
// import Electronic from '../../../assets/images/Electronic.png'

// const Banner0 = () => {
//   return (
//     <div>
//   <div className="relative p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-20 bg-yellow-200 h-[30rem]">
//       <div className="flex flex-col items-center justify-center order-2 sm:order-2 md:order-1 lg:order-1">
//         <div className='space-y-3'>
//           <h4 className="text-2xl">Latest Trending</h4>
//           <h1 className="font-serif text-5xl">Electronics Items</h1>
//           <p className="mb-2 italic">Last call for upto 45%</p>
//           <button className="p-1 px-5 text-white bg-gray-900 ">
//             SHOP NOW
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col items-center justify-center order-1 sm:order-1 md:order-2 lg:order-2">
//         {" "}
//         <img src={Electronic} alt="electronics" />
//       </div>
//       {/* <div className="absolute inset-0 bg-gray-600/90 mix-blend-multiply" /> */}
//       <div
//         className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#FF4694] to-[#776FFF] opacity-25"
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//         />
//       </div>
//     </div>
//     </div>
//   )
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Electronic from "../../../assets/images/Electronic.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styleBanner0.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner0Carosul from "./banner0Carosul";

export default function Home() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner0Carosul
            type="Electronics Items"
            img={Electronic}
            bg={"bg-yellow-200"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner0Carosul
            type="Kitchen Items"
            img={Electronic}
            bg={"bg-orange-400"}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Banner0Carosul
            type="Electronics Goods"
            img={Electronic}
            bg={"bg-orange-200"}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Banner0Carosul
            type="Electronics Items"
            img={Electronic}
            bg={"bg-orange-300"}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Banner0Carosul
            type="Mobile Items"
            img={Electronic}
            bg={"bg-orange-400"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
