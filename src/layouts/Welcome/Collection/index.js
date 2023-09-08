import React from 'react';
import { useNavigate } from 'react-router-dom';
import collectionImg from '../../../assets/images/collectionImg.png';
import col1 from '../../../assets/images/welcome/col1.png';
import col2 from '../../../assets/images/welcome/col2.png';
import col3 from '../../../assets/images/welcome/col3.png';
import col4 from '../../../assets/images/welcome/col4.png';
import col5 from '../../../assets/images/welcome/col5.png';
import col6 from '../../../assets/images/welcome/col6.png';
import col7 from '../../../assets/images/welcome/col7.png';

const Collection = () => {
  const history = useNavigate();

  const singleCard = () => (
    <div
      className="flex items-center w-full h-full transition-all duration-300 bg-[#0000003a] rounded-lg shadow-lg hover:brightness-125 hover:scale-105 hover:shadow-2xl"
      role="button"
    >
      <div className="relative p-5 group">
        <div className="w-full h-[90%]">
          <img className="w-full h-[90%] object-fit" src={col6} />
        </div>
        {/* <div className="flex items-center justify-center w-full bg-[#e9bd5510]">
          <img className="w-full h-full object-fit" src={col5} />
        </div>
        <div className="w-full  bg-[#f19f2414]">
          <img className="object-cover w-full h-full" src={col5} />
        </div>
        <div className="w-full bg-[#ed7b3437]">
          {' '}
          <img className="object-cover w-full h-full" src={col1} />
        </div> */}
        <div className="absolute top-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pt-4 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="px-5">
            <i
              class="fa fa-bookmark ml-1 text-xl  border px-1 rounded text-gray-100"
              aria-hidden="true"
            ></i>
            &nbsp; &nbsp; &nbsp;
            <i
              class="fa fa-share-alt ml-1 text-xl border px-1 rounded text-gray-100"
              aria-hidden="true"
            ></i>
          </div>
          <div className="text-center ">
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
              &nbsp; <span className="text-white">5.0</span>{' '}
              <p className="text-white">From 4,506 users</p>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 transition-all duration-500 bg-gray-800 opacity-0 group-hover:pb-5 group-hover:bg-gray-800 group-hover:opacity-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="p-3">
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
          <div className="p-3 text-center">
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
              &nbsp;<span className="text-white">5.0</span>{' '}
              <p className="text-white">From 4,506 users</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#e6f4f6] container-fluid">
      <div className="relative w-full welcome-page-collection-gradient">
        <div className="transition-all duration-300 hover:bg-transparent bg-[#0000000a]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4  px-6 py-10 bg-[#e6f4f6] overflow-hidden sm:px-2 sm:py-2 md:px-2 lg:px-2">
          <div className="relative h-[100%] p-5">
            <img
              className="w-auto h-[80%] mt-28 transition-all duration-300 bg-transparent brightness-100 hover:brightness-90 hover:scale-100 object-fit  hover:blur-none "
              src={collectionImg}
              alt=""
            />
            <div className="absolute top-0 z-20 sm:top-10 left-5">
              <div className="space-y-1">
                <h4 className="text-2xl">Latest Trending</h4>
                <h1 className="font-serif text-5xl">Collection</h1>
                <p className="mb-2 italic">
                  Last call for upto <span className="animate-bounce">45%</span>
                </p>
                <button
                  className="p-1 px-5 text-white bg-gray-900 "
                  role="button"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="absolute top-2/4 right-5">
              <p
                className="mb-2 font-serif text-3xl italic underline transition-all duration-300 animate-bounce text-gray-950 hover:text-gray-700"
                role="button"
              >
                Hurry up!
              </p>
            </div>
            <div className="absolute bottom-5 right-5">
              <p
                className="mb-2 font-serif text-xl font-bold text-gray-900 underline transition-all duration-300 hover:text-gray-700"
                role="button"
              >
                See all Products
              </p>
            </div>
            <div className="absolute top-6 sm:top-20 w-[20%]">
              <img
                className="w-auto h-[80%] mt-28 transition-all duration-300 bg-transparent brightness-100 hover:brightness-90 hover:scale-100 object-fit group-hover:blur-none "
                src={col3}
                alt=""
              />
            </div>
            <div className="absolute top-10 sm:top-20 right-1/4 lg:right-28 lg:bottom-2/3">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping p-6 absolute inline-flex h-full w-full rounded-full d-flex justify-center bg-[#69351440] opacity-75"></span>
                <span class="relative p-6 inline-flex rounded-full h-6 w-full text-center d-flex justify-center   bg-[#00000010] opacity-75"></span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2">
            <div className="w-full h-full overflow-hidden rounded-lg">
              {singleCard()}
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg">
              {singleCard()}
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg">
              {singleCard()}
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg">
              {singleCard()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
