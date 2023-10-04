import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import amazonLogo from "../../../assets/images/amazon-new.png";
import "./welcomeHeader.css";
import Collection from "../Collection";
import { Link } from "react-scroll";

const HeaderSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", link: "home" },
    { name: "Collection", link: "collection" },
    { name: "Best Sellers", link: "best-sellers" },
    { name: "Todays Deals", link: "todays-deals" },
    { name: "Flat off", link: "flat-off" },
  ];
  const history = useNavigate();

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 bg-gray-950">
        <nav
          className={
            "flex items-center justify-between px-3 py-2 mx-auto container-fluid  lg:px-8"
          }
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="">
              <img className="w-auto h-9" src={amazonLogo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex justify-center hidden w-3/4 text-center lg:flex lg:gap-x-5 ">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-2 pt-1 font-serif text-lg leading-6 tracking-wide text-gray-200 transition-all duration-200 hover:scale-95 hover:text-orange-200 hover:cursor-pointer first-letter:text-lg "
              >
                {item.name}
              </Link>
            ))}
            <form>
              <div class="flex">
                <div class="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="block h-6 w-full p-4 pr-20 z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    class="absolute top-0 right-0 p-2.5 pt-1.5 h-full text-sm font-medium text-white bg-orange-400  border border-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={() => false}
              className="px-3 py-1 font-serif text-xl font-semibold leading-6 text-gray-200 duration-100 rounded-full cursor-pointer hover:scale-95 hover:text-orange-300"
              onClick={() => history("/login")}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default HeaderSection;
