import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed top-0 z-50 flex items-center justify-center w-screen h-screen bg-[#010101af]">
      <ThreeCircles
        height="100"
        width="100"
        color="#fb923c"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
