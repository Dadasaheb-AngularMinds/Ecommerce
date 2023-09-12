import React from "react";
import img6 from "../../../assets/images/img6.png";

const SpecialOfferForYou = () => {
  return (
    <section id="flat-off">
      <div className="pt-3 bg-gray-100 container-fluid">
        <p className="font-serif text-4xl font-bold text-center text-blue-950">
          -Special Offers-
        </p>

        <div className="relative grid grid-cols-1 gap-4 px-5 mt-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:px-2 lg:px-10 sm:px-5">
          <div class="px-4 bg-slate-400">
            <img
              className="object-cover w-full h-full transition-all duration-300 md:object-contain brightness-100 hover:brightness-90 hover:scale-100"
              src={img6}
            />
          </div>
          <div class="p-4 pt-10 sm:pt-20 bg-slate-100 text-center">
            <p className="text-3xl font-bold sm:text-5xl">
              <span className="text-green-600">Special Offer</span> Everyday!
            </p>
            <div className="mt-5 text-center">
              <p className="text-3xl font-bold text-gray-600">
                Deal of the Day...!
              </p>
            </div>
            <div className="mt-5 text-center">
              <p className="text-3xl font-bold text-gray-900">
                <span className="text-gray-500 line-through">$ 199.00</span>
                &nbsp;&nbsp;&nbsp; $ 179.00
              </p>
            </div>
            <div className="grid grid-cols-4 px-5 py-5 mx-5 mt-5 bg-gray-100 border rounded-lg shadow-lg sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              <div className="text-xl text-center sm:border-r-4 sm:text-2xl border-slate-500">
                12
                <div className="font-bold text-orange-500">days</div>
              </div>
              <div className="text-xl text-center sm:border-r-4 sm:text-2xl border-slate-500">
                12
                <div className="font-bold text-orange-500">days</div>
              </div>
              <div className="text-xl text-center sm:border-r-4 sm:text-2xl border-slate-500">
                12
                <div className="font-bold text-orange-500">days</div>
              </div>
              <div className="text-xl text-center sm:text-2xl border-slate-500">
                12
                <div className="font-bold text-orange-500">days</div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button class="transition-all duration-300 rounded-full bg-orange-500 hover:bg-orange-400 hover:scale-95 px-7 lg:px-10 py-1 lg:py-3 text-[16px] lg:text-xl">
                Explore more
              </button>
            </div>
          </div>
          <div className="absolute top-10 sm:top-10 right-1/4 lg:right-28 lg:bottom-2/3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#69351440] opacity-75"></span>
              <span class="relative p-6 inline-flex rounded-full h-6 w-full text-center d-flex justify-center   bg-[#00000010] opacity-75"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferForYou;
