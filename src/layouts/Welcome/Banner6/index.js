import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import purse from "../../../assets/images/welcome/purse.png";

const Banner6 = () => {
  return (
    <div className="relative h-full px-24 pt-24 pb-5 bg-orange-300 container-fluid">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper-fashion"
      >
        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdeecd" }}
        >
          <div
            className="slide-circle"
            style={{ "--bg-color": "#fcf4e4" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
          <img src={purse} alt="purse" />

          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#d1edfa" }}
        >
          <div
            className="slide-circle"
            style={{ "--bg-color": "#e7f5f9" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#cdfecc" }}
        >
          <div
            className="slide-circle"
            style={{ "--bg-color": "#e4fde3" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
          <img src={purse} alt="purse" />
          <div className="absolute right-3 bottom-2">
            <i
              className="px-1.5 ml-1 text-2xl text-gray-900 bg-white rounded fa fa-cart-plus top-2 hover:text-3xl"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute right-3 top-2">
            <i
              class="fa fa-heart-o top-2 ml-1  px-1.5 rounded-full text-2xl group-hover:opacity-90 hover:text-3xl bg-white text-orange-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute flex flex-col text-left bottom-1 left-5">
            <span className="font-serif text-[16px]">New Ladies Bag</span>
            <span className="text-[14px]">
              Price:<span className="font-bold text-[14px]">$20</span>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide-fashion"
          style={{ backgroundColor: "#fdccd5" }}
        >
          <div
            className="shadow-lg slide-circle"
            style={{ "--bg-color": "#fde4e8" }}
          ></div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
};

export default Banner6;
