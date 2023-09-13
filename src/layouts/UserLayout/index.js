import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function UserLayout() {
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
                        {/* <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <Sidebar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="">
          <div className="sticky top-0 z-40 flex items-center px-0 bg-orange-400 border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-2 sm:px-0 lg:px-0">
            <button
              type="button"
              className="-m-2.5  pl-5 pr-2 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
            <Header />
          </div>

          <main className="h-full py-0">
            <div className="px-0">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
