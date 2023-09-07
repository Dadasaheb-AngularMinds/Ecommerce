import React from 'react';
import img6 from '../../../assets/images/img6.png';

const SpecialOfferForYou = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-5 py-10 bg-gray-100 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:px-20 lg:px-28 sm:px-6">
      <div class="  p-4">
        <img
          className="object-cover w-full h-full transition-all transition-transform duration-300 brightness-100 hover:brightness-90 hover:scale-100"
          src={img6}
        />
      </div>
      <div class="p-4 pt-20">
        <p className="text-5xl font-bold">
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
        <div className="grid grid-cols-1 px-10 py-5 mx-5 mt-5 bg-gray-100 border rounded-lg shadow-lg sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          <div className="text-2xl text-center border-r-4 border-slate-500">
            12
            <div className="font-bold text-orange-500">days</div>
          </div>
          <div className="text-2xl text-center border-r-4 border-slate-500">
            12
            <div className="font-bold text-orange-500">days</div>
          </div>
          <div className="text-2xl text-center border-r-4 border-slate-500">
            12
            <div className="font-bold text-orange-500">days</div>
          </div>
          <div className="text-2xl text-center border-slate-500">
            12
            <div className="font-bold text-orange-500">days</div>
          </div>
        </div>
        <div className='mt-5 text-center'>
          <button class="rounded-full bg-orange-500 px-10 py-3 text-xl">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferForYou;
