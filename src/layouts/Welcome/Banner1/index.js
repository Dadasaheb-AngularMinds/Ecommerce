import React from "react";
import { useNavigate } from "react-router-dom";

const Banner1 = () => {
  const history = useNavigate();

  return (
    <section id="home">
      <div className="bg-[#e6f4f6] container-fluid">
        <div className="w-full">
          <div className="relative px-6 py-10 bg-[#e6f4f6] overflow-hidden shadow-sm group sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 object-cover w-full h-full transition-all duration-300 brightness-200 saturate-0 group-hover:blur-none blur-sm"
              src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-600/90 mix-blend-multiply" />
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#FF4694] to-[#776FFF] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative max-w-5xl mx-auto lg:mx-0">
              <div className="text-5xl font-bold text-orange-300 font-header">
                MarketMingle - Clean Minimal eCommerce Site
              </div>
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <div className="w-full mx-auto text-sky-200">
                    <p className="text-l font-poppins">
                      Blackwood is evaluated as my most unique Multipurposes
                      HTML5 Template for shop online with clean and modern
                      design.
                    </p>
                  </div>
                </blockquote>
                <figcaption className="mt-6 text-base text-white font-header">
                  <div className="font-semibold">--DJP.</div>
                  <div className="mt-1">Founder of Workcation</div>
                  <button
                    onClick={() => history("/user/dashboard")}
                    className="mt-3 text-3xl text-orange-300 underline rounded hover:text-orange-200 underline-offset-8"
                  >
                    -Continue shopping
                  </button>
                </figcaption>
              </figure>
            </div>
            <div className="absolute top-96 right-44 lg:top-36">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex justify-center w-full h-full p-6 bg-orange-400 rounded-full opacity-75 animate-ping d-flex"></span>
                <span className="relative inline-flex justify-center w-full h-6 p-6 text-center bg-orange-400 rounded-full opacity-75 d-flex">
                  <i className="absolute ml-1 text-2xl text-orange-600 fa fa-play top-2 hover:text-3xl"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
