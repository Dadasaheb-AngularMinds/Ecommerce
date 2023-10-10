import React from 'react';

const SessionTimeout = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full bg-[#000000e3]">
      <button className="absolute rounded-lg hover:bg-orange-500 bg-orange-400 left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] p-5 text-black hover:scale-105 transition-all duration-300 border border-orange-500">
        <div className='text-xl font-semibold transition-transform font-header'>Session Timeout</div>
      </button>
    </div>
  );
};

export default SessionTimeout;
