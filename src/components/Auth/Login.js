import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wave from 'react-wavify';
import { authenticationService } from '../../services/AuthServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';
import Cookie from 'js-cookie';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await authenticationService.login(formData);
    if (response?.token) {
      Cookie.set('token', response.token);
    }
    const { error, token, message } = response;
    if (error) {
      setLoading(false);
      return toast.error(message, { autoClose: 2500 });
    }

    if (token) {
      toast.success('Login Successful! Welcome back.', { autoClose: 3000 });
      sessionStorage.setItem('Token', token);
      document.cookie = token;
      setLoading(false);
      const debounceTimeout = setTimeout(() => {
        history('/user/dashboard');
      }, 1000);
      return () => {
        clearTimeout(debounceTimeout);
      };
    }
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
      {loading ? <Loader /> : <></>}
      <div className="flex flex-col items-center">
        <div className="sm:px-20 px-5 py-10 bg-white inset-shadow rounded-lg mt-16 sm:w-[37rem]">
          <div className="flex flex-col items-center w-full">
            <button
              href="!#"
              className="bg-neutral-100 relative  group text-start mb-4 h-[50px] rounded-lg sm:w-[80%]  w-full flex items-center z-30 "
            >
              <i className="flex items-center justify-center h-full  text-lg text-white rounded-l-lg rounded-r-sm w-[100px] fa fa-facebook-f"></i>{' '}
              <span className="w-full text-gray-500 transition-all duration-500 group-hover:text-white">
                Sign in with Facebook{' '}
              </span>
              <div className="absolute top-0 left-0 w-16 h-full transition-all duration-500 bg-[#3360bd] rounded-l-lg -z-20 group-hover:w-full group-hover:rounded-r-lg"></div>
            </button>

            <p className="text-sm text-zinc-500">
              {' '}
              <span>........</span> Or, <a href="sign-in.html">sign in</a> with
              your email<span> ........</span>{' '}
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <p className="mb-2 font-medium text-zinc-600">Username</p>
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Enter your username"
                  name="username"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="text-gray-400 fa fa-envelope"></i>
                </div>
              </div>
              <label>
                <p className="mb-2 font-medium text-zinc-600">Password</p>
              </label>
              <div className="relative mb-5">
                <input
                  type="password"
                  name="password"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg bg-neutral-100 focus:ring-orange-400"
                  placeholder="Enter your password"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="text-gray-400 fa fa-lock"></i>
                </div>
              </div>
              <div className="flex justify-between mb-8 text-sm text-zinc-500">
                <div className="flex">
                  <input
                    className={`mt-[2px] rounded-[4px] focus:outline-none ${
                      checked && 'text-orange-400'
                    } focus:ring-0 ring-white`}
                    type="checkbox"
                    name="remember_me"
                    id="m-agree"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <label className="ml-2 " htmlFor="m-agree">
                    Keep me signed in
                  </label>
                </div>
                <div className="sign__forgot">
                  <a href="!#">Forgot your password?</a>
                </div>
              </div>

              <div className="">
                <button className="relative group w-full mb-5 text-base bg-orange-400 z-30 border-black p-3.5 rounded-lg font-medium hover:text-white">
                  {' '}
                  Sign In
                  <div
                    className="absolute left-0 w-10 h-[35px] bg-orange-500 -z-10  bottom-0 rounded-bl-lg rounded-tr-[85%] group-hover:w-full 
                  group-hover:h-full group-hover:rounded-lg transition-all duration-500"
                  ></div>
                </button>
              </div>

              <div className="text-sm text-center text-zinc-500">
                <p>
                  New to Market?{' '}
                  <span
                    onClick={() => history('/register')}
                    className="text-orange-400 cursor-pointer"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
