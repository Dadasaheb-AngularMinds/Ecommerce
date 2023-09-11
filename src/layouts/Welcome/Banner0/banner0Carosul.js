import React from "react";

const Banner0Carosul = (props) => {
  return (
    <section id="home">
      <div
        className={`p-10 py-20 grid grid-cols-1 sm:grid-cols-1 ${props?.bg} md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-20  h-[30rem]`}
      >
        <div className="flex flex-col items-center justify-center order-2 sm:order-2 md:order-1 lg:order-1">
          <div className="space-y-3">
            <h4 className="text-2xl">Latest Trending</h4>
            <h1 className="font-serif text-5xl">{props?.type}</h1>
            <p className="mb-2 italic">Last call for upto 45%</p>
            <button className="p-1 px-5 text-white bg-gray-900 ">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center order-1 sm:order-1 md:order-2 lg:order-2">
          {" "}
          <img
            className="object-contain w-full h-auto transition-all duration-300 group-hover:blur-none "
            src={props?.img}
            alt="electronics"
          />
        </div>

        {/* <div className="absolute inset-0 bg-gray-600/90 mix-blend-multiply" /> */}
      </div>
    </section>
  );
};

export default Banner0Carosul;
