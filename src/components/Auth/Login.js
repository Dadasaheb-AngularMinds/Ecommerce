import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wave from "react-wavify";

function Login() {
  console.log("Login Page");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    history("/user/dashboard");
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
      <div className="flex flex-col items-center">
        <div className="px-20 py-10 bg-white custom-shadow mt-28 w-[37rem]">
          {/* header */}

          <div className="flex flex-col items-center w-full">
            <button
              href="!#"
              className="bg-neutral-100 relative  group text-start mb-4 h-[50px] rounded-lg w-[80%] flex items-center z-30 "
            >
              <i className="flex items-center justify-center h-full  text-lg text-white rounded-l-lg rounded-r-sm w-[100px] fa fa-facebook-f"></i>{" "}
              <span className="w-full text-gray-500 transition-all duration-500 group-hover:text-white">
                Sign in with Facebook{" "}
              </span>
              <div className="absolute top-0 left-0 w-16 h-full transition-all duration-500 bg-[#3360bd] rounded-l-lg -z-20 group-hover:w-full group-hover:rounded-r-lg"></div>
            </button>

            <p className="text-sm text-zinc-500">
              {" "}
              <span>........</span> Or, <a href="sign-in.html">sign in</a> with
              your email<span> ........</span>{" "}
            </p>
          </div>
          {/* form */}
          <div className="mt-8">
            <form action="#">
              <label>
                <p className="mb-2 font-medium text-zinc-600">Work email</p>
              </label>
              <div class="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Enter your email"
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
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg bg-neutral-100 focus:ring-orange-400"
                  placeholder="Enter your password"
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
                    className="mt-[2px] rounded-[4px]"
                    type="checkbox"
                    id="m-agree"
                  />
                  <label className="ml-2 " for="m-agree">
                    Keep me signed in
                  </label>
                </div>
                <div className="sign__forgot">
                  <a href="!#">Forgot your password?</a>
                </div>
              </div>

              <div className="">
                <button className="relative group w-full mb-5 text-base bg-orange-400 z-30 border-black p-3.5 rounded-lg font-medium hover:text-white">
                  {" "}
                  Sign In
                  <div
                    className="absolute left-0 w-10 h-[35px] bg-orange-500 -z-10  bottom-0 rounded-bl-lg rounded-tr-[85%] group-hover:w-full 
                  group-hover:h-full group-hover:rounded-lg transition-all duration-500"
                  ></div>
                </button>
              </div>

              <div className="text-sm text-center text-zinc-500">
                <p>
                  New to Market?{" "}
                  <a href="sign-up.html" className="text-orange-400">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
