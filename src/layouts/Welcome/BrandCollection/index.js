import React from 'react';
import brandImg from '../../../assets/images/img8.jpg';

const BrandCollection = () => {
  return (
    <div className="h-auto  bg-[#e6f4f6] container-fluid">
      <div className="z-20 w-full h-auto">
        <div className="relative h-auto px-6 py-20 overflow-hidden shadow-sm group sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img
            className="absolute inset-0 object-cover w-full h-screen group-hover:blur-none "
            src={brandImg}
            alt=""
          />
          <div className="absolute inset-0 radial-gradient transition-all duration-300  group-hover:bg-[#0000002e] mix-blend-multiply" />
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#FF4694] to-[#776FFF] opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="relative h-auto max-w-5xl mx-auto py-52 lg:mx-auto">
            <blockquote className="absolute inset-0 justify-center h-auto text-lg font-semibold text-center text-white top-1/3 sm:text-xl sm:leading-8">
              <div className="text-4xl font-bold text-center text-orange-400 font-effect-outline font-header sm:text-6xl ">
                Brand B & R
              </div>
              <div className="w-full mx-auto mt-2 text-orange-400">
                <p className="text-xl font-poppins">
                  Blackwood is evaluated as my most unique Multipurposes.
                  Workcation
                </p>
              </div>
              <figcaption className="inset-0 top-auto text-base text-white font-poppins ">
                <button
                  // onClick={() => history('/user/dashboard')}
                  className="px-10 py-1 mt-4 text-l text-orange-300 transition-all duration-500 border border-orange-500 sm:text-xl rounded-3xl hover:text-orange-200 hover:bg-[#fb923c84]"
                >
                  -Continue shopping
                </button>
              </figcaption>
            </blockquote>
          </div>
          <div className="absolute bottom-2/3 left-1/4 lg:left-28 lg:bottom-3/4">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#ed8c4f40] opacity-75"></span>
              <span class="relative p-6 inline-flex rounded-full h-6 w-full text-center d-flex justify-center bg-[#00000040] opacity-75"></span>
            </span>
          </div>
          <div className="absolute top- 2/3 right-1/4 lg:right-28 lg:top-2/3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#ed8c4f40] opacity-75"></span>
              <span class="relative p-6 inline-flex rounded-full h-6 w-full text-center d-flex justify-center   bg-[#00000040] opacity-75"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCollection;
