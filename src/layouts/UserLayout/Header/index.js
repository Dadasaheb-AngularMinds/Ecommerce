import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <div
      className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
      aria-hidden="true"
    >
      <Navbar />
    </div>
  );
};

export default Header;
