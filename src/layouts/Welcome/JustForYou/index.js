import React from "react";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img5 from "../../../assets/images/img5.jpg";

const JustForYou = () => {
  return (
    <section id="todays-deals">
      <div className="relative p-5 bg-gray-800">
        <p className="mb-5 font-serif text-4xl font-bold text-center text-orange-400">
          -Regional-
        </p>
        <p
          className="absolute font-serif italic text-white underline text-l sm:text-xl animate-bounce top-2 sm:top-6 right-5"
          role="button"
        >
          See all products
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div class="group overflow-hidden bg-gray-200 relative p-4">
            <img
              className="object-cover w-full h-full transition-all duration-300 brightness-100 hover:brightness-90 hover:scale-100"
              src={img5}
            />

            <div className="absolute top-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pt-2 sm:group-hover:pt-5 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="p-4 ">
                <i
                  class="fa fa-bookmark top-2 ml-1 text-xl  border px-1 rounded text-gray-100"
                  aria-hidden="true"
                ></i>
                &nbsp; &nbsp; &nbsp;
                <i
                  class="fa fa-share-alt top-2 ml-1 text-xl border px-1 rounded text-gray-100"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="p-4 text-center">
                <p className="text-base">
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp; <span className="text-white">5.0</span>{" "}
                  <p className="text-white">From 4,506 users</p>
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pb-2 sm:group-hover:pb-5 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="p-4 ">
                <i
                  class="fa fa-heart-o top-2 ml-1 border px-1 rounded text-2xl group-hover:opacity-90 hover:text-3xl text-orange-600"
                  aria-hidden="true"
                ></i>
                &nbsp;&nbsp;&nbsp;
                <i
                  class="fa fa-cart-plus  top-2 ml-1 border px-1 rounded text-2xl hover:text-3xl text-gray-100"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="p-4 text-center">
                <p className="text-base">
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;
                  <i class="fa fa-star text-orange-500" aria-hidden="true"></i>
                  &nbsp;<span className="text-white">5.0</span>{" "}
                  <p className="text-white">From 4,506 users</p>
                </p>
              </div>
            </div>
          </div>

          <div class="grid bg-gray-100 p-4 gap-4">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-7">
              <div class="group bg-gray-300 overflow-hidden p-0 relative">
                <img
                  className="object-cover w-full h-full overflow-hidden transition-all transition-transform duration-300 brightness-100 group-hover:brightness-90 group-hover:scale-110"
                  src={img3}
                />

                <div className="absolute top-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pt-1 sm:group-hover:pt-5 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4">
                    <i
                      class="fa fa-bookmark top-2 ml-1 text-l sm:text-xl border px-1 sm:py-0 py-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                    &nbsp; &nbsp; &nbsp;
                    <i
                      class="fa fa-share-alt top-2 ml-1 text-l sm:text-xl border px-1 sm:py-0 py-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-2 text-center sm:px-4">
                    <p className="text-base">
                      <i
                        class="fa fa-star text-orange-500"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <i
                        class="fa fa-star text-orange-500"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <i
                        class="fa fa-star text-orange-500"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <i
                        class="fa fa-star text-orange-500"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <i
                        class="fa fa-star text-orange-500"
                        aria-hidden="true"
                      ></i>
                      &nbsp; <span className="text-white">5.0</span>{" "}
                      <p className="text-white ">From 4,506 users</p>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pb-1 sm:group-hover:pb-5 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4 pt-2">
                    <i
                      class="fa fa-heart-o top-2 ml-1 border px-1 py-1 sm:py-0 rounded sm:text-2xl text-l group-hover:opacity-90 hover:text-xl text-orange-600"
                      aria-hidden="true"
                    ></i>
                    &nbsp;&nbsp;&nbsp;
                    <i
                      class="fa fa-cart-plus top-2 ml-1 border px-1 py-1 sm:py-0 rounded text-l sm:text-2xl hover:text-xl text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-4 pt-2 text-center">
                    <p className="text-white text-l sm:text-xl">
                      4,506 users bought this
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
              <div class="group relative overflow-hidden p-0 bg-gray-300">
                <img
                  className="object-cover w-full h-full overflow-hidden transition-all transition-transform duration-300 brightness-100 hover:brightness-90 hover:scale-110"
                  src={img1}
                />
                {/* <div className="absolute inset-0 flex items-center justify-center w-full pb-1 transition-all duration-500 opacity-0 group-hover:pt-4 group-hover:opacity-60">
                <i
                  class="fa fa-plus text-4xl text-gray-100"
                  aria-hidden="true"
                ></i>
              </div> */}
                <div className="absolute top-0 left-0 grid w-full grid-cols-2 pb-1 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pt-4 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4">
                    <i
                      class="fa fa-bookmark top-2 ml-1 text-xl  border px-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                    &nbsp; &nbsp; &nbsp;
                    <i
                      class="fa fa-share-alt top-2 ml-1 text-xl border px-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-4 text-center">
                    <p className="text-lg italic text-white underline">
                      See details
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pb-3 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4 pt-2">
                    <i
                      class="fa fa-heart-o top-2 ml-1 border px-1 rounded text-2xl group-hover:opacity-90 hover:text-3xl text-orange-600"
                      aria-hidden="true"
                    ></i>
                    &nbsp;&nbsp;&nbsp;
                    <i
                      class="fa fa-cart-plus  top-2 ml-1 border px-1 rounded text-2xl hover:text-3xl text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-4 pt-2 text-center">
                    <p className="text-xl text-white">70% off</p>
                  </div>
                </div>
              </div>

              <div class="group relative overflow-hidden p-0 bg-gray-300">
                <img
                  className="object-cover w-full h-full overflow-hidden transition-all transition-transform duration-300 brightness-100 hover:brightness-90 hover:scale-110"
                  src={img2}
                />
                <div className="absolute top-0 left-0 grid w-full grid-cols-2 pb-1 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pt-4 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4">
                    <i
                      class="fa fa-bookmark top-2 ml-1 text-xl  border px-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                    &nbsp; &nbsp; &nbsp;
                    <i
                      class="fa fa-share-alt top-2 ml-1 text-xl border px-1 rounded text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-4 text-center">
                    <p className="text-lg italic text-white underline">
                      See details
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pb-3 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="px-4 pt-2">
                    <i
                      class="fa fa-heart-o top-2 ml-1 border px-1 rounded text-2xl group-hover:opacity-90 hover:text-3xl text-orange-600"
                      aria-hidden="true"
                    ></i>
                    &nbsp;&nbsp;&nbsp;
                    <i
                      class="fa fa-cart-plus  top-2 ml-1 border px-1 rounded text-2xl hover:text-3xl text-gray-100"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="px-4 pt-2 text-center">
                    <p className="text-xl text-white">70% off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustForYou;
