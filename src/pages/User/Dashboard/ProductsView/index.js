import React, { useState } from 'react';
import productImg from '../../../../assets/images/product-furniture.png';
import winterImg from '../../../../assets/images/winter.png';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import {
  clothing,
  homesAndFurnitures,
  jewellery,
  mobilesAndElectronics,
  makeUp,
  healthCare,
  books,
  toys,
} from './data';
import BannerUserDash from '../Banner1';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductsView = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        {/* ------------Categories-------------- */}
        <div className="max-h-full col-span-1 overflow-y-auto md:col-span-1">
          <div className="p-5">
            <div class="max-w-screen-xl mx-auto px-5 ">
              <div class="flex flex-col items-left">
                <h2 class="font-bold text-xl font-header text-orange-500">
                  Categories
                </h2>
              </div>
              <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto">
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        {' '}
                        <i class={`fa ${clothing[0]?.icon} mr-2`}></i>{' '}
                        {clothing[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${homesAndFurnitures[0]?.icon} mr-2`}></i>{' '}
                        {homesAndFurnitures[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${jewellery[0]?.icon} mr-2`}></i>{' '}
                        {jewellery[0].text}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i
                          class={`fa ${mobilesAndElectronics[0]?.icon} mr-2`}
                        ></i>{' '}
                        {mobilesAndElectronics[0].text}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${makeUp[0]?.icon} mr-2`}></i>{' '}
                        {makeUp[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${healthCare[0]?.icon} mr-2`}></i>{' '}
                        {healthCare[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${books[0]?.icon} mr-2`}></i>{' '}
                        {books[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${toys[0]?.icon} mr-2`}></i>{' '}
                        {toys[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              id="default-carousel"
              class="relative w-full"
              data-carousel="slide"
            >
              <div class="relative h-80 overflow-hidden rounded bg-gray-200">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={productImg}
                    class="absolute block w-auto h-44 object-center z-30 hover:scale-110 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={productImg}
                    class="absolute block w-auto h-44 object-center z-30 hover:scale-110 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={productImg}
                    class="absolute block w-auto h-44 object-center z-30 hover:scale-110 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={productImg}
                    class="absolute block w-auto h-44 object-center z-30 hover:scale-110 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={productImg}
                    class="w-auto h-44 object-center z-30 hover:scale-110 duration-500 transition-transform absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-slate-400"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-slate-400"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-slate-400"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-slate-400"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-slate-400"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-3 h-3 text-gray-600 dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-3 h-3 text-gray-600 dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ------------Products view-------------- */}
        <div className="max-h-[900px] col-span-1 px-2 overflow-y-auto no-scrollbar md:col-span-3">
          <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-3 sm:grid-cols-2">
            <div className="">
              <span className="text-neutral-600 font-header">
                View :{' '}
                <i
                  class="fa fa-plus-square-o ml-2 cursor-pointer"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-bars ml-2 cursor-pointer"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <div className="">
              <span className="text-neutral-600 font-header">
                Showing 1–12 of 24 results
              </span>
            </div>
            <div className="text-right ">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="text-neutral-600 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 font-header text-sm font-semibold shadow-sm ring-0 ring-inset ring-gray-300 hover:bg-gray-50">
                    Default Sorting
                    <ChevronDownIcon
                      className="w-5 h-5 -mr-1 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 56, 6, 7].map((item, index) => {
              return (
                <div
                  className="relative transition-all duration-300 shadow-xl group h-max"
                  onClick={() => navigate('/user/product')}
                >
                  <div className="absolute right-0 z-10 space-y-4 transition-all duration-500 opacity-0 group-hover:opacity-70 group-hover:pr-4">
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </div>
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </div>
                  </div>

                  {index % 2 === 0 && (
                    <div className="absolute animate-pulse top-2 left-2 z-10 px-1 py-2 space-y-4 transition-all duration-500 bg-[#ff8429] rounded-full">
                      <p className="text-sm text-white">20%</p>
                    </div>
                  )}

                  <div class="group w-full h-full flex justify-center py-10 bg-[#f2efef] overflow-hidden cursor-pointer hover:brightness-110 duration-500 transition-transform transform  ">
                    <img
                      src={productImg}
                      alt="Image 1"
                      class="w-auto h-44 object-center z-30 group-hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col mt-1">
                    <p className="text-orange-500 font-header">FURNITURE</p>
                    <p className="text-gray-900 transition-all duration-500 cursor-pointer font-poppins hover:tracking-wide hover:text-gray-700">
                      Wooden Single Drawer
                    </p>
                    <p className="text-2xl font-header">$125.00</p>
                  </div>
                  <div className="mt-2">
                    <button className="w-full py-1 transition-all duration-300 border border-gray-500 hover:bg-orange-500 hover:text-black">
                      <p className="transition-all duration-300 hover:tracking-wide">
                        Select Options
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <div className="md:col-span-1">
          <div class="relative w-full h-full flex justify-center bg-[#f2efef] overflow-hidden cursor-pointer hover:brightness-110 duration-500 transition-all">
            <img
              src={winterImg}
              alt="Image 1"
              class="w-full max-h-80 z-10 duration-500 transition-transform"
            />
            <div className="absolute top-0 left-0 z-30 w-full h-full text-center bg-transparent py-14">
              <p className="mt-5 text-3xl font-bold font-header">Winter Sale</p>
              <span className="mt-5 text-4xl font-bold font-header">
                Up to <span className='text-orange-500 font-styled animate-pulse'>40%</span> Off
              </span>

              <div className="grid grid-cols-4 gap-2 px-10 mt-5">
                <div className="flex flex-col border-2 border-gray-500 rounded-lg">
                  <span className="font-bold text-orange-600 font-styled">
                    95
                  </span>
                  <span className="font-bold text-header">DAYS</span>
                </div>
                <div className="flex flex-col border-2 border-gray-500 rounded-lg">
                  <span className="font-bold text-orange-600 font-styled">
                    95
                  </span>
                  <span className="font-bold text-header">HRS</span>
                </div>
                <div className="flex flex-col border-2 border-gray-500 rounded-lg">
                  <span className="font-bold text-orange-600 font-styled">
                    95
                  </span>
                  <span className="font-bold text-header">MIN</span>
                </div>
                <div className="flex flex-col border-2 border-gray-500 rounded-lg">
                  <span className="font-bold text-orange-600 font-styled">
                    95
                  </span>
                  <span className="font-bold text-header">SEC</span>
                </div>
              </div>

              <div><button className='px-5 py-1 mt-5 transition-all duration-300 bg-orange-500 border border-orange-500 rounded-lg hover:bg-orange-400'>View all</button></div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <BannerUserDash />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
