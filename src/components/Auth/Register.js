import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  console.log("Sign up Page");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    history("/login");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      {/* <div className="flex flex-col justify-center flex-1 min-h-full py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="w-auto h-10 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-6 bg-white shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email here"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    value={formData?.password}
                    onChange={handleInputChange}
                    placeholder="Email"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-3 text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-5">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="px-6 text-gray-900 bg-white">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Twitter
                  </span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="sm:px-20 px-5 py-10 bg-white custom-shadow mt-28 sm:w-[37rem]">
          {/* header */}

          <div className="flex flex-col items-center w-full">
            <button
              href="!#"
              className="bg-neutral-100 relative  group text-start mb-4 h-[50px] rounded-lg sm:w-[80%]  w-full flex items-center z-30 "
            >
              <i className="flex items-center justify-center h-full  text-lg text-white rounded-l-lg rounded-r-sm w-[100px] fa fa-google"></i>{" "}
              <span className="w-full text-gray-500 transition-all duration-500 group-hover:text-white">
                Sign up with Google{" "}
              </span>
              <div className="absolute top-0 left-0 w-16 h-full transition-all duration-500 bg-[#E93E30] rounded-l-lg -z-20 group-hover:w-full group-hover:rounded-r-lg"></div>
            </button>

            <p className="text-sm text-zinc-500">
              {" "}
              <span>........</span> Or, <a href="sign-in.html">sign up</a> with
              your email<span> ........</span>{" "}
            </p>
          </div>
          {/* form */}
          <div className="mt-8">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <p className="mb-2 font-medium text-zinc-600">Full Name</p>
              </label>
              <div class="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Full name"
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                >
                  <i class="fa fa-user text-gray-400"></i>
                </div>
              </div>

              <label>
                <p className="mb-2 font-medium text-zinc-600">Work email</p>
              </label>
              <div class="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                >
                  <i class="fa fa-envelope text-gray-400"></i>
                </div>
              </div>
              <label>
                <p className="mb-2 font-medium text-zinc-600">Password</p>
              </label>
              <div class="relative mb-5">
                <input
                  type="password"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg bg-neutral-100 focus:ring-orange-400"
                  placeholder="Enter your password"
                  onChange={(e) => handleInputChange(e)}
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                >
                  <i class="fa fa-lock text-gray-400"></i>
                </div>
              </div>
              <label>
                <p className="mb-2 font-medium text-zinc-600">Re-Password</p>
              </label>
              <div class="relative mb-5">
                <input
                  type="password"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg bg-neutral-100 focus:ring-orange-400"
                  placeholder="Re-password"
                  onChange={(e) => handleInputChange(e)}
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                >
                  <i class="fa fa-lock text-gray-400"></i>
                </div>
              </div>
              <div className="flex justify-between mb-8 text-sm text-zinc-500">
                <div className="flex">
                  <input
                    className={`mt-[2px] rounded-[4px] focus:outline-none ${
                      checked && "text-orange-400"
                    } focus:ring-0 ring-white`}
                    type="checkbox"
                    id="m-agree"
                    checked={checked} 
                    onChange={() => setChecked(!checked)}
                  />
                  <label className="ml-2 " for="m-agree">
                    I agree to the{" "}
                    <span className="text-zinc-900 hover:text-orange-400">
                      Terms & Conditions
                    </span>
                  </label>
                </div>
              </div>

              <div className="">
                <button className="relative group w-full mb-5 text-base bg-orange-400 z-30 border-black p-3.5 rounded-lg font-medium hover:text-white">
                  {" "}
                  Sign Up
                  <div
                    className="absolute left-0 w-10 h-[35px] bg-orange-500 -z-10  bottom-0 rounded-bl-lg rounded-tr-[85%] group-hover:w-full 
                  group-hover:h-full group-hover:rounded-lg transition-all duration-500"
                  ></div>
                </button>
              </div>

              <div className="text-sm text-center text-zinc-500">
                <p>
                  Already in Market?{" "}
                  <span
                    onClick={() => history("/login")}
                    className="text-orange-400 cursor-pointer"
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
