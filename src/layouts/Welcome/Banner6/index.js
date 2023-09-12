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
import imgCol6 from "../../../assets/images/welcome/col6.png";
import love from "../../../assets/images/welcome/love.png";

const Banner6 = () => {
  const breakpoints = {
    // Define breakpoints and set slidesPerView accordingly
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="h-full px-5 lg:px-10 pb-5 bg-gradient-to-t from-[#f05907f9] to-[#f2bda8] container-fluid">
      <div className="grid grid-cols-1 gap-1 overflow-hidden transition-all duration-300 bg-transparent pt-7 lg:px-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:px-2 sm:py-2 md:px-2 lg:px-2">
        <div className="relative flex-col p-5 sm:p-20 d-flex">
          <p className="lg:w-[90%] font-serif text-5xl lg:text-7xl font-bold">
            <span className="text-gray-500">Inspired</span> by Your Fashion
          </p>
          <p className="font-serif text-5xl font-bold lg:text-7xl">Dream</p>
          <button className="px-5 py-1 mt-5 text-base text-black transition-all duration-300 bg-yellow-500 border border-orange-400 font-poppins lg:py-2 lg:text-3xl lg:px-10 hover:bg-orange-300 rounded-3xl">
            <span className="font-serif">
              Shop Now{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </span>
          </button>
          {/* <div className="w-full px-5 py-2 mt-5 shadow-lg sm:w-2/3 rounded-3xl bg-slate-100">
            <div class="mt-3 flex -space-x-2 overflow-hidden">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="mt-3 text-sm font-medium">
              <a href={() => false} class="text-blue-500">
                + 198 others
              </a>
            </div>
          </div> */}

          <div className="absolute right-1/4 lg:right-28 lg:bottom-2/3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#69351440] opacity-75"></span>
              <span class="relative p-6 inline-flex rounded-full h-6 w-full text-center d-flex justify-center   bg-[#00000010] opacity-75"></span>
            </span>
          </div>
        </div>

        <div className="relative h-[500px] p-5">
          <img
            className="w-auto mx-auto my-auto h-[100%] transition-all duration-300 bg-transparent brightness-100 hover:brightness-90 "
            src={imgCol6}
            alt=""
          />
          <img
            className="absolute hidden lg:block h-[15%] w-[50%] sm:w-[15%] top-0 sm:top-1/2"
            src={love}
          />
          <div className="absolute top-10 sm:top-20 right-1/4 lg:right-28 lg:bottom-2/3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#69351440] opacity-75"></span>
              <span class=" p-6  rounded-full h-6 w-full text-center d-flex justify-start   bg-[#00000010] opacity-75"></span>
            </span>
          </div>
        </div>
      </div>

      <Swiper
        breakpoints={breakpoints}
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
