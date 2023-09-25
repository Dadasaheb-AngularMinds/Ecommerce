import React from "react";

import { useNavigate } from "react-router-dom";

const TrendingProducts = () => {
  const imageArray = [
    {
      src: "https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/product-2/product-3.jpg",
      category: "FURNITURE",
      name: " Wooden Single Drawer",
      price: "$125",
    },
    {
      src: "https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/product-2/product-1.jpg",
      category: "FURNITURE",
      name: " Wooden Single Drawer",
      price: "$125",
    },
    {
      src: "https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/product-2/product-2.jpg",
      category: "FURNITURE",
      name: " Wooden Single Drawer",
      price: "$125",
    },
    {
      src: "https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/product-2/product-4.jpg",
      category: "FURNITURE",
      name: " Wooden Single Drawer",
      price: "$125",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="col-span-1 p-5 sm:py-24 sm:px-24 md:col-span-3">
      <div className="flex flex-col items-center sm:pb-14">
        <p className="mb-3 text-xl font-semibold"> TRENDING PRODUCTS</p>
        <p className="text-sm text-center sm:text-base text-zinc-500">{`Mirum est notare quam littera gothica quam nunc putamus parum claram!`}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {imageArray.map((item, index) => {
          return (
            <div
              className="relative transition-all duration-300 group bg-slate-100 h-max"
              onClick={() => navigate("/user/product")}
            >
              <div className="absolute right-0 z-50 space-y-4 transition-all duration-500 opacity-0 group-hover:opacity-70">
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
              <div class="group w-full h-full overflow-hidden cursor-pointer  duration-500 transition-transform transform  ">
                <img
                  src={item.src}
                  alt="1"
                  class="w-full h-auto object-center z-30 group-hover:scale-110 duration-500 transition-transform"
                />
              </div>
              <div className="bg-white">
                <div className="flex flex-col mt-1 bg-white">
                  <p className="mb-1 text-sm text-orange-500 font-neutral">
                    {item.category}
                  </p>
                  <p className="text-base transition-all duration-500 cursor-pointer font-neutral gray-900 font- hover:tracking-wide hover:text-yellow-700">
                    {item.name}
                  </p>
                  <p className="text-base font-header">{item.price}</p>
                </div>
                <div className="mt-2 bg-white ">
                  <button className="w-full px-4 py-2 transition-all duration-300 border border-zinc-300 hover:bg-orange-500 hover:text-white">
                    <p>Select Options</p>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProducts;
