import React from 'react';

const Banner3 = () => {
  const imageArray = [
    'https://images.wallpaperscraft.com/image/single/raspberries_blackberries_berries_111698_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/peaches_spices_seasonings_101193_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/cherries_drops_wet_866252_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/figs_grapes_blueberries_101724_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/strawberries_berries_macro_941732_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/scales_tangerines_retro_868300_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/tangerines_citruses_drops_887084_1600x1200.jpg',
    'https://images.wallpaperscraft.com/image/single/strawberries_berries_leaves_1021712_1600x1200.jpg',
  ];
  return (
    <div className="relative pt-5 pb-20 welcome-linear-gradient-category container-fluid ">
      <p class="text-4xl font-bold font-serif text-blue-950 text-center mb-5">
        -Categories-
      </p>
      <p
        className="absolute font-serif text-xl italic animate-bounce top-2 sm:top-6 text-blue-950 right-5"
        role="button"
      >
        See all products
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2">
        {imageArray.map((item, index) => (
          <div class="group rounded relative overflow-hidden bg-slate-400">
            <div class=" w-full h-full overflow-hidden cursor-pointer hover:brightness-125 duration-500 transition-transform transform hover:scale-110">
              <img src={item} alt="Image 1" class="w-full h-auto" />
            </div>
            <div className="absolute h-5 p-5 transition-all duration-300 opacity-0 group-hover:border-t-4 group-hover:border-l-4 border-slate-50 w-50 group-hover:top-10 top-20 left-20 group-hover:left-10 group-hover:opacity-100"></div>
            <div className="absolute h-5 p-5 transition-all duration-300 opacity-0 group-hover:border-b-4 group-hover:border-r-4 border-slate-50 w-50 group-hover:bottom-10 group-hover:right-10 bottom-20 right-20 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
