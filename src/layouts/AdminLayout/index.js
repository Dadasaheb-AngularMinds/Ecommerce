import { Children, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

import Desktop from './Sidebar/Desktop';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import {
  clothing,
  toys,
} from '../../pages/Customer/Dashboard/ProductsView/data';

export default function AdminLayout({ Children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <Sidebar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="">
          <div className="sticky top-0 z-40 flex flex-col items-center h-16 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6">
            <div className="w-full">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="w-px bg-gray-200 lg:hidden" aria-hidden="true" />
              <Navbar />
            </div>
            <div class="-mt-1 px-2 grid grid-cols-8 md:grid-cols-6 lg:grid-cols-7 gap-4 w-full bg-slate-100 h-16">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="">
                  <div class="grid divide-y bg-slate-100 z-30 divide-neutral-200 max-w-xl mx-auto">
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                          <span className="uppercase">
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
                              strokeLinecap="round"
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
                                    class="checked:bg-orange-500 h-4 w-4 focus:outline-none focus:ring-0 cursor-pointer"
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
              ))}
            </div>
          </div>

          <main className="py-5 pt-20 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
