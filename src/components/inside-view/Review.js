import React from "react";

const Review = () => {
  return (
    <div className="container lg:py-5 lg:px-36">
      <h1 className="text-xl font-semibold">Reviews(03)</h1>
      <div className="flex p-5 pb-0">
        <img
          src="https://wphix.com/html/blackwood-prv/blackwood/assets/img/author/avater-1.png"
          className="mt-4 w-14 h-14 bg-indigo-20 lg:h-20 lg:w-28"
        ></img>

        <div className="p-4 pb-0 ">
          <h2 className="text-base font-bold lg:mb-1 lg:text-xl text-neutral-800">
            Siarhei Dzenisenka
          </h2>
          <p className="text-sm text-orange-400 mb-[0.5]">- 3 Monhts Ago</p>
          <ul className="flex mb-2 ml-1">
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

          <p className="mb-3 ml-1 text-sm sm:text-base text-zinc-600 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ipsum soluta, voluptates officia quos, distinctio quia incidunt
            repellat quisquam laborum eum aut quas, magni vel nemo consequuntur
            odio at.
          </p>
          <p className="mb-8 ml-1 text-sm font-medium hover:text-orange-500">
            Leave Reply
          </p>
          <hr />

          {/* reply */}
          <div className="flex p-5 pb-0">
            <img
              src="https://wphix.com/html/blackwood-prv/blackwood/assets/img/author/avater-2.png"
              className="mt-4 w-14 h-14 bg-indigo-20 lg:h-20 lg:w-28"
            ></img>
            <div className="p-4">
              <h2 className="text-base font-bold lg:mb-1 lg:text-xl text-neutral-800">
                Jhon Dzenisenka
              </h2>
              <p className="text-sm text-orange-400 mb-[0.5]">- 2 Monhts Ago</p>
              <ul className="flex mb-2 ml-1">
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
                    <i className="text-orange-400 fa fa-star"></i>
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

              <p className="mb-3 ml-1 text-sm sm:text-base text-zinc-600 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                ipsum soluta, voluptates officia quos, distinctio quia incidunt
                repellat quisquam laborum eum aut quas, magni vel nemo
                consequuntur odio at. sum soluta, voluptates officia quos,
                distinctio quia incidunt repellat quisquam laborum eum aut quas,
                magni vel nemo consequuntur odio at.
              </p>
              <p className="ml-1 text-sm font-medium hover:text-orange-500">
                Leave Reply
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Review;
