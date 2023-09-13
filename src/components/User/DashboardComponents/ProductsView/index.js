import React, { useState } from 'react';
import productImg from '../../../../assets/images/product-furniture.png';

const ProductsView = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to remove focus from the input field
  const removeFocus = () => {
    setIsFocused(false);
  };
  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="p-5 bg-slate-500"></div>
        </div>

        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
            {[1, 23, 4, 5, 6, 7].map((item, index) => {
              return (
                <div className="relative p-5 transition-all duration-300 shadow-xl group bg-slate-100 h-max">
                  <div className='absolute right-0 z-50 space-y-4 transition-all duration-500 opacity-0 group-hover:opacity-70'>
                  <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  </div>
                  <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  </div>
                  <div class="group w-full h-full overflow-hidden cursor-pointer hover:brightness-110 duration-500 transition-transform transform  ">
                    <img
                      src={productImg}
                      alt="Image 1"
                      class="w-full h-auto object-center z-30 group-hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col mt-1">
                    <p className="text-orange-500 font-header">FURNITURE</p>
                    <p className="text-gray-900 transition-all duration-500 cursor-pointer font-poppins hover:tracking-wide hover:text-gray-700">
                      Wooden Single Drawer
                    </p>
                    <p className="text-2xl font-header">$125.00</p>
                  </div>
                  <div className="mt-2">
                    <button className="w-full py-1 transition-all duration-300 border border-gray-500 hover:bg-orange-500 hover:text-white">
                      <p>Select Options</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
