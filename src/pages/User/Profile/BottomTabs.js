import React from 'react';

const BottomTabs = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 bg-[#eef0f3] gap-2 mt-5 py-5 px-5 shadow-sm">
        <p className="text-2xl font-semibold font-header">Credit Options</p>
        <div className="flex">
          <i
            className="mt-3 text-3xl text-blue-500 fa fa-credit-card-alt"
            aria-hidden="true"
          ></i>
          <div className="px-5 py-2">
            <p className="text-xl font-header">Flipkart Pay Later</p>
            <p className="text-xl text-gray-600 font-header">
              <span>Available Balance :</span> &nbsp;
              <span>
                <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;14465.00
              </span>
            </p>
          </div>
        </div>
        <p className="absolute bottom-0 text-xl italic text-orange-500 underline cursor-pointer hover:tracking-wider hover:text-orange-600 right-1/3 sm:right-10 sm:bottom-1/3 font-header">
          See More Options
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 py-5 mt-5 sm:grid-cols-4">
        <div className="">
          <button className="group relative py-5 rounded-md bg-[#7265E6] w-full smooth-shadow hover:bg-[#5342eb] transition-all duration-300 hover:tracking-wider">
            <i
              class="fa fa-archive absolute left-5 text-4xl top-4 group-hover:scale-105 animate-pulse text-gray-200 transition-all duration-300"
              aria-hidden="true"
            ></i>
            <span className="text-2xl text-[#ffffff] font-header">Orders</span>
          </button>
        </div>
        <div className="">
          <button className="relative py-5 rounded-md bg-[#e2463b] hover:bg-[#cb2b1f] transition-all duration-300 hover:tracking-wider w-full smooth-shadow">
            <i
              class="fa fa-heart absolute left-5 text-4xl top-4 group-hover:scale-105 animate-pulse text-gray-200 transition-all duration-300"
              aria-hidden="true"
            ></i>
            <span className="text-2xl text-[#ffffff] font-header">
              Wishlist
            </span>
          </button>
        </div>
        <div className="">
          <button className="relative py-5 rounded-md bg-[#262626] w-full smooth-shadow hover:bg-[#030303] transition-all duration-300 hover:tracking-wider">
            <i
              class="fa fa-money absolute left-5 text-4xl top-4 group-hover:scale-105 animate-pulse text-gray-200 transition-all duration-300"
              aria-hidden="true"
            ></i>
            <span className="text-2xl text-[#ffffff] font-header">Coupons</span>
          </button>
        </div>
        <div className="">
          <button className="relative py-5 rounded-md bg-[#00A2AE] w-full smooth-shadow hover:bg-[#157e85] transition-all duration-300 hover:tracking-wider">
            <i
              class="fa fa-info-circle absolute left-5 text-4xl top-4 group-hover:scale-105 animate-pulse text-gray-200 transition-all duration-300"
              aria-hidden="true"
            ></i>
            <span className="text-2xl text-[#ffffff] font-header">
              Help Center
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomTabs;
