import React, { useState } from "react";
import homeAndFurniture from "../../assets/images/welcome/home&furniture.png";
import clothing from "../../assets/images/welcome/col5.png";
import mobilesAndElect from "../../assets/images/welcome/mobiles&electronics.png";
import Tabs from "./Tabs";

const Product = () => {
  const imageArray = [homeAndFurniture, clothing, mobilesAndElect];
  const [activeImage, setActiveImage] = useState(imageArray[0]);
  return (
    <div className="h-full bg-white ">
      <div className="grid h-full grid-cols-1 p-5 sm:gap-12 lg:grid-cols-2">
        {/* image */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex items-center justify-center order-2 gap-4 mt-5 mb-3 lg:order-1 lg:flex-col">
            {imageArray.map((item) => (
              <img
                src={item}
                className="object-contain p-3 mb-3 bg-transparent border-[2px] bg-zinc-50 border-stone-400 w-16 h-16  sm:h-28 sm:w-28"
                onClick={() => setActiveImage(item)}
                alt="preview"
              />
            ))}
          </div>
          <div className="order-1 h-full col-span-2 lg:order-2 welcome-linear-gradient-category">
            <img
              src={activeImage}
              className="object-contain w-full h-full p-3"
              alt="main"
            />
          </div>
        </div>

        {/* details */}
        <div>
          {/* name & price */}
          <div className="mb-5">
            <h4 className="mb-2 text-2xl lg:mb-3">Product Name</h4>
            <div className="mb-1 lg:flex">
              <ul className="flex mb-2">
                <li>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <span class="lg:ml-5 hidden lg:border-l-2 lg:pl-2 lg:block">
                3 rating(s)
              </span>
              <span class="lg:ml-5 lg:border-l-2 lg:pl-2">
                <span className="text-sm lg:text-base">Add your Review</span>
              </span>
            </div>
            <div className="mb-5">
              <span>$96.00</span>
              <span className="pl-3 text-gray-400 line-through strike">
                $96.00
              </span>
            </div>
          </div>
          <hr />

          {/* Description */}
          <div className="mt-4 mb-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quibusdam similique suscipit quaerat dicta
            </p>
          </div>
          <hr />

          {/* color */}
          <div className="mt-5 mb-8">
            <p>
              Color :{" "}
              <span className="ml-10">
                {[1, 2, 3, 4].map((item, index) => (
                  <input
                    type="color"
                    value={
                      (index === 1 && "#FF0000") ||
                      (index === 2 && "#007aff") ||
                      (index === 3 && "#ed9251")
                    }
                  />
                ))}
              </span>
            </p>
          </div>

          {/* size */}
          <div className="flex mb-8 ">
            <span>Size: </span>
            <ul className="flex w-full ml-8 lg:ml-14">
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#" class="unavailable">
                  S
                </a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#">M</a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#">L</a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#">XL</a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#">2XL</a>
              </li>
              <li className="w-8 mr-1 text-center border lg:w-10 lg:mr-3">
                <a href="#">3XL</a>
              </li>
            </ul>
          </div>

          {/* quantity */}
          <div className="flex">
            <div className="flex items-end mb-12">
              <label className="mt-3">Quantity</label>
            </div>

            <div class="custom-number-input h-10 w-32 ml-8">
              <div class="flex flex-row h-12 w-full  relative bg-transparent mt-1 border">
                <button
                  data-action="decrement"
                  class="  text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  class="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                  name="custom-input-number"
                  value="0"
                />
                <button
                  data-action="increment"
                  class=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
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
            <span class="ct">Category:</span>
            <span>
              <a href="#" className="ml-5 mr-1 text-sm uppercase text-zinc-400">
                Accessories,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-sm uppercase text-zinc-400">
                Gaming,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-sm uppercase text-zinc-400">
                PC Computers,
              </a>
            </span>
            <span>
              <a href="#" className="mr-1 text-sm uppercase text-zinc-400">
                Ultrabooks
              </a>
            </span>
          </div>

          {/* share */}
          <div class="flex">
            <span>Share :</span>
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
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Product;
