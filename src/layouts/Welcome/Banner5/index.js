import React from "react";
import Electronic from "../../../assets/images/Electronic.png";
const Banner5 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="">
        <img src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg" />
      </div>
      
      <div className="relative flex flex-col justify-center p-5 space-y-3 text-white">
        <h3 className="text-2xl">Header</h3>
        <p className="font-serif">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ab
          quae, at non, repellendus omnis iusto accusamus aliquid ipsam vero aut
          pariatur repudiandae incidunt qui similique illum, nesciunt quam ut.
        </p>
        <button className="w-full p-1 px-5 bg-transparent border border-white lg:w-28">
          Shop Now
        </button>
      </div>
      
      <div className="relative flex flex-col justify-center order-2 p-5 space-y-3 text-white lg:order-1">
        <h3 className="text-2xl">Header</h3>
        <p className="font-serif">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ab
          quae, at non, repellendus omnis iusto accusamus aliquid ipsam vero aut
          pariatur repudiandae incidunt qui similique illum, nesciunt quam ut.
        </p>
      </div>
      
      <div className="order-1 lg:order-2">
        <img src="https://wphix.com/html/blackwood-prv/assets/img/hero/landing-header-1.jpg"  />
      </div>
    </div>
  );
};

export default Banner5;
