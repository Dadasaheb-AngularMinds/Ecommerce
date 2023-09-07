import React from 'react'
import Electronic from '../../../assets/images/Electronic.png'

const Banner0 = () => {
  return (
    <div>
      <div className="grid grid-cols-7 pt-20 bg-yellow-200 h-[30rem]">
          <div className="flex flex-col items-center justify-center col-span-3">
            <div>
              <h4 className="text-2xl">Latest Trending</h4>
              <h1 className="font-serif text-5xl">Electronics Items</h1>
              <p className="mb-2 italic">Last call for upto 45%</p>
              <button className="p-1 px-5 text-white bg-gray-900 ">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center col-span-4">
            {" "}
            <img src={Electronic} alt="electronics" />
          </div>
        </div>
    </div>
  )
}

export default Banner0
