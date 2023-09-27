import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import amazonLogo from '../../../assets/images/amazon.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="grid h-20 grid-cols-1 bg-[#ffffff]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      <div className="flex justify-center py-0 my-3 border-r-0 sm:border-r-0 md:border-r-2 lg:border-r-2 xl:border-r-2">
        <img
          className="w-auto h-14 sm:h-14 md:h-14 lg:h-14"
          src={amazonLogo}
          alt=""
        />
      </div>
      <div className="hidden py-0 my-3 sm:hidden lg:block md:hidden xl:block">
        <div className="flex flex-row py-2 group">
          <div className="relative w-1/4 h-full ">
            <i
              class="absolute fa fa-money text-orange-400 text-4xl top-1 group-hover:-top-1 transition-all duration-300 left-1/4"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cursor-pointer">
            <p className="text-xl font-bold font-header">100% Payments</p>
            <p className="text-sm text-gray-500 font-poppins">
              Monthly Installment
            </p>
          </div>
        </div>
      </div>
      <div className="hidden py-0 my-3 sm:hidden lg:block md:hidden xl:block">
        <div className="flex flex-row py-2 group">
          <div className="relative w-1/4 h-full ">
            <i
              class="absolute fa fa-retweet text-orange-400 text-4xl top-1 group-hover:-top-1 transition-all duration-300 left-1/4"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cursor-pointer">
            <p className="text-xl font-bold font-header">14-Day Returns</p>
            <p className="text-sm text-gray-500 font-poppins">
              Secure Payments
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full my5 sm:hidden lg:hidden md:hidden xl:block"></div>
      <div className="justify-center hidden py-0 my-3 md:justify-end sm:hidden lg:block md:block xl:block">
        <div className="flex flex-row justify-center gap-4 py-2 group">
          <i
            class="fa fa-user-circle-o text-gray-800 cursor-pointer hover:text-orange-500 hover:animate-spin text-2xl group-hover:top-0 transition-all duration-300 left-1/4"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-random text-gray-800 cursor-pointer hover:text-orange-500 hover:animate-pulse text-2xl group-hover:top-0 transition-all duration-300 left-1/4"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-heart-o text-gray-800 cursor-pointer hover:text-orange-500 hover:animate-pulse text-2xl group-hover:top-0 transition-all duration-300 left-1/4"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-shopping-cart text-gray-800 cursor-pointer hover:text-orange-500 hover:animate-pulse text-2xl group-hover:top-0 transition-all duration-300 left-1/4"
            aria-hidden="true"
            onClick={() => navigate('/user/cart')}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
