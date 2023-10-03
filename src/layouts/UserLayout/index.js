import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomBar from './Navbar/bottom';
import { useEffect } from 'react';
import FooterSection from '../../pages/User/Footer';
import Breadcrumb from '../../components/Breadcrumbs';

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollStyle, setScrollStyle] = useState('nav-header-before');

  function isInViewport(ele) {
    const rect = ele.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const eleview = () => {
    if (isInViewport(document.getElementById('px-72'))) {
      setScrollStyle('nav-header-before');
    } else {
      setScrollStyle(
        'nav-header-after top-bounce-effect fixed top-0 z-50 shadow-lg border-1'
      );
    }
  };

  useEffect(() => {
    function handleScroll() {
      eleview();
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
                    ></button>
                  </div>
                </Transition.Child>
                <Sidebar />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex items-center px-0 bg-orange-400 border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-2 sm:px-0 lg:px-0">
        <button
          type="button"
          className="-m-2.5  pl-5 pr-2 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </button>
        <Header />
      </div>
      <div id="px-72"></div>
      <div
        className={
          scrollStyle +
          ' navbar grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'
        }
        aria-hidden="true"
      >
        <BottomBar />
      </div>
      <main className="min-h-screen py-0 bg-[#eef0f3]">
        {/* <Breadcrumb /> */}
        <Outlet />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
