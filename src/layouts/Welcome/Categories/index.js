import React from "react";
import clothing from "../../../assets/images/welcome/col5.png";
import homeAndFurniture from "../../../assets/images/welcome/home&furniture.png";
import jewelleryImg from "../../../assets/images/welcome/jewellery.png";
import mobilesAndElect from "../../../assets/images/welcome/mobiles&electronics.png";
import makeupImg from "../../../assets/images/welcome/makeup.png";
import healthAndWellness from "../../../assets/images/welcome/health&wellness.png";
import books from "../../../assets/images/welcome/books.png";
import toysAndGames from "../../../assets/images/welcome/toysAndGames.png";

const Categories = () => {
  const imageArray = [
    clothing,
    homeAndFurniture,
    jewelleryImg,
    mobilesAndElect,
    makeupImg,
    healthAndWellness,
    books,
    toysAndGames,
  ];
  return (
    <section id="best-sellers">
      <div className="relative pt-5 pb-20 welcome-linear-gradient-category container-fluid ">
        <p className="mb-5 font-serif text-4xl font-bold text-center text-blue-950">
          -Categories-
        </p>
        <p
          className="absolute hidden font-serif text-xl italic animate-bounce top-2 sm:top-6 text-blue-950 right-5 lg:block"
          role="button"
        >
          See all products
        </p>
        <div className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {imageArray.map((item, index) => (
            <div key={index} className="relative overflow-hidden bg-transparent rounded shadow-lg radial-gradient group">
              <div className="w-full h-full overflow-hidden transition-transform duration-500 transform cursor-pointer  hover:brightness-110 hover:scale-110">
                <img
                  src={item}
                  alt="Image 1"
                  className="z-30 object-center w-full h-auto "
                />
              </div>
              <div className="absolute h-5 p-5 transition-all duration-300 opacity-0 group-hover:border-t-4 group-hover:border-l-4 border-slate-50 w-50 group-hover:top-10 top-20 left-20 group-hover:left-10 group-hover:opacity-100"></div>
              <div className="absolute h-5 p-5 transition-all duration-300 opacity-0 group-hover:border-b-4 group-hover:border-r-4 border-slate-50 w-50 group-hover:bottom-10 group-hover:right-10 bottom-20 right-20 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
