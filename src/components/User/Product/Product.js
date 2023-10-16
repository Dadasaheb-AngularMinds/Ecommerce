import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  addToWishlist,
} from "../../../redux/UserReducer/productSlice";

import '../../../layouts/UserLayout/zoom.css';

const Product = () => {
  const imageArray = [
    'https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/quick-view/quick-view-02-1.jpg',
    'https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/quick-view/quick-view-02-2.jpg',
    'https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/quick-view/quick-view-02-3.jpg',
  ];
  const [activeImage, setActiveImage] = useState(imageArray[0]);
  const dispatch = useDispatch();

  // -------------------------------------------------------

  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const image = e.target;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifyPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMagnifyPosition({ x: 0, y: 0 });
  };
  // -------------------------------------------------------

  return (
    <div className="h-full bg-white sm:px-10">
      <div className="grid h-full grid-cols-1 p-5 sm:gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex items-center justify-center order-2 gap-4 mt-5 mb-3 lg:order-1 lg:flex-col">
            {imageArray.map((item) => (
              <img
                src={item}
                className={`${
                  activeImage === item
                    ? 'border-yellow-400'
                    : 'border-stone-400'
                } object-contain  mb-3 bg-transparent border-[2px] bg-zinc-50  w-12 h-16  sm:h-24 sm:w-16`}
                onClick={() => setActiveImage(item)}
                alt="preview"
              />
            ))}
          </div>

          <div className="order-1 group relative md:h-[586px]  col-span-2 flex lg:order-2 bg-zinc-100">
            <img
              src={activeImage}
              className="flex-grow object-contain "
              alt="main"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
            <div
              className="absolute hidden group-hover:block left-[100%] w-[750px] top-0 h-[550px] magnify-glass"
              style={{
                backgroundSize: '200%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${'https://wphix.com/html/blackwood-prv/blackwood/assets/img/products/quick-view/quick-view-02-2.jpg'})`,
                backgroundPosition: `-${magnifyPosition.x * 2}px -${
                  magnifyPosition.y * 2
                }px`,
              }}
            ></div>
          </div>
        </div>
        <div>
          <div className="mb-5 ">
            <h4 className="mb-2 text-base font-bold transition-all duration-500 cursor-pointer lg:mb-3 hover:text-orange-500">
              Wooden container Bowl
            </h4>
            <div className="mb-1 lg:flex">
              <ul className="flex border-r-2 lg:pr-4 border-r-1">
                <li className="mr-1">
                  <span>
                    <i className="text-orange-400 fa fa-star"></i>
                  </span>
                </li>
                <li className="mr-1">
                  <span>
                    <i className="text-orange-400 fa fa-star"></i>
                  </span>
                </li>
                <li className="mr-1">
                  <span>
                    <i className="text-orange-400 fa fa-star"></i>
                  </span>
                </li>
                <li className="mr-1">
                  <span>
                    <i
                      className="text-orange-400 fa fa-star-half-o"
                      aria-hidden="true"
                    ></i>
                  </span>
                </li>
                <li className="mr-1">
                  <span>
                    <i
                      className="text-orange-400 fa fa-star-o"
                      aria-hidden="true"
                    ></i>
                  </span>
                </li>
              </ul>

              <span class="text-sm hidden flex items-center border-r-2 lg:px-4 lg:block text-zinc-500">
                3 rating(s)
              </span>
              <vr />
              <span className="text-sm text-zinc-500 lg:px-4">
                Add your Review
              </span>
            </div>
            <div className="mb-5">
              <span className="text-sm">$96.00</span>
              <span className="pl-3 text-sm text-gray-400 line-through strike">
                $106.00
              </span>
            </div>
          </div>
          <hr />

          <div className="mt-4 mb-4">
            <p className="font-serif text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quibusdam similique suscipit quaerat dicta quibusdam similique
              suscipit quaerat dicta quibusdam similique suscipit quaerat dicta
            </p>
          </div>
          <hr />
          <div className="mt-5 mb-8">
            <p className="text-sm font-normal">
              Color :{' '}
              <span className="ml-10">
                {[1, 2, 3, 4].map((item, index) => (
                  <input
                    type="color"
                    value={
                      (index === 1 && '#FF0000') ||
                      (index === 2 && '#007aff') ||
                      (index === 3 && '#ed9251')
                    }
                  />
                ))}
              </span>
            </p>
          </div>

          <div className="flex mb-8 ">
            <span className="text-sm font-normal">Size: </span>
            <ul className="flex w-full ml-12 lg:ml-14">
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  S
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  M
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  L
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  XL
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  2XL
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" className="text-sm text-zinc-500">
                  3XL
                </a>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="flex items-end mb-12">
              <label className="mt-3 text-sm font-normal">Quantity :</label>
            </div>

            <div class="custom-number-input h-10 w-32 ml-8">
              <div class="flex flex-row h-12 w-full  relative bg-transparent mt-1 border">
                <button
                  data-action="decrement"
                  class="  text-gray-600  h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  class="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700"
                  name="custom-input-number"
                  value="0"
                />
                <button
                  data-action="increment"
                  class=" text-gray-600  h-full w-20 rounded-r cursor-pointer"
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            {/* <div className="pro-cart-btn">
              <a href="cart.html" className="mb-20 add-cart-btn">
                + Add to Cart
              </a>
            </div> */}
          </div>

          {/* categories */}
          <div class="product__tag mb-8">
            <span className="text-sm font-normal">Category :</span>
            <span>
              <a href="#" className="ml-5 mr-1 text-xs uppercase text-zinc-400">
                Accessories,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-xs uppercase text-zinc-400">
                Gaming,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-xs uppercase text-zinc-400">
                PC Computers,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-xs uppercase text-zinc-400">
                Ultrabooks
              </a>
            </span>
          </div>

          {/* share */}
          <div class="flex">
            <span className="text-sm font-normal">Share :</span>
            <ul className="flex ml-10">
              <li>
                <a href="#" className="mr-5">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="mr-5">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="mr-5">
                  <i class="fa fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="#" className="mr-5">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-14">
            <button
              className="p-2 bg-transparent border border-orange-400 group"
              onClick={() => {
                dispatch(
                  addToWishlist({
                    name: 'Wooden container Bowl',
                    ratings: 3,
                    price: '$96',
                    description:
                      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    color: 'brown',
                    size: 'M',
                    quantity: 2,
                    category: 'furniture',
                  })
                );
              }}
            >
              <span className="mr-3">
                <i
                  class="fa fa-heart group-hover:text-orange-400"
                  aria-hidden="true"
                ></i>
              </span>
              Wishlist
            </button>
            <button
              className="transition-all duration-100 bg-orange-400 border border-orange-400 group hover:bg-transparent"
              onClick={() => {
                dispatch(
                  addToCart({
                    name: 'Wooden container Bowl',
                    ratings: 3,
                    price: '$96',
                    description:
                      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                    color: 'brown',
                    size: 'M',
                    quantity: 2,
                    category: 'furniture',
                  })
                );
              }}
            >
              <span className="mr-3">
                <i
                  className="fa fa-cart-plus group-hover:text-orange-400"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
    </div>
  );
};

export default Product;
