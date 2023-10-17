import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Sign out", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BottomBar = () => {
  const history = useNavigate();
  return (
    <div className="sticky top-0 z-40 flex flex-1 px-2 pb-2 sm:px-16 md:px-16 lg:px-20 xl:px-5">
      <form className="flex flex-1 " action="#" method="GET">
        <div className="relative w-full mt-2 rounded-md shadow-sm sm:w-full md:w-full lg:w-full xl:w-1/2">
          <div className="absolute inset-y-0 left-0 items-center hidden sm:flex">
            <select
              id="country"
              name="country"
              autoComplete="country"
              className="h-full py-0 relative px-4 text-gray-900 border-0 bg-[#ffffff] focus:outline-none sm:text-sm"
            >
              <option>All Categories</option>
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          {/* <div className="absolute left-0 hidden h-5 bg-gray-800 border border-gray-400 sm:block sm:left-40 top-2 "></div> */}
          <MagnifyingGlassIcon
            className="absolute inset-y-0 w-5 h-full text-gray-700 pointer-events-none right-2"
            aria-hidden="true"
          />
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="block w-full border-0 py-1.5 pl-2 sm:pl-44 text-gray-900 focus:outline-none ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder="Search for Product , Brands & Offers..."
          />
        </div>
      </form>

      <div className="flex items-center ml-2 gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 hidden sm:block ml-1 text-gray-400 hover:text-gray-500"
        >
          <i
            className="fa fa-bell-o text-gray-100 cursor-pointer hover:text-orange-500 hover:animate-pulse text-2xl hover:top-0 transition-all duration-300"
            aria-hidden="true"
          ></i>
        </button>

        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          aria-hidden="true"
        />

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center p-1.5">
            <img
              className="w-8 h-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="hidden lg:flex lg:items-center ">
              <span
                className="ml-4 text-sm font-semibold leading-6 text-gray-100"
                aria-hidden="true"
              >
                Tom Cook
              </span>
              <ChevronDownIcon
                className="w-5 h-5 ml-2 text-gray-100 "
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <p
                      onClick={() => history(item.href)}
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                      )}
                    >
                      {item.name}
                    </p>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default BottomBar;
