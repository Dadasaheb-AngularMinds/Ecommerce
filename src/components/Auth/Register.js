import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticationService } from '../../services/AuthServices';
import Loader from '../../components/Loader';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
  });
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { username, email, password } = formData;
    const payload = { username: username, email: email, password: password };
    if (formData?.password !== formData?.re_password) {
      setLoading(false);
      return toast.error(
        'Passwords do not match. Please ensure that both passwords are the same',
        { autoClose: 3000 }
      );
    } else {
      const response = await authenticationService.register(payload);
      const { error, message } = response;
      if (error) {
        setLoading(false);
        return toast.error(message, { autoClose: 2500 });
      }
      setLoading(false);
      toast.success(response?.result?.message, { autoClose: 3000 });
      const debounceTimeout = setTimeout(() => {
        history('/login');
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
        <div className="sm:px-20 px-5 py-10 bg-white custom-shadow  sm:w-[37rem]">
          <div className="flex flex-col items-center w-full">
            <button
              href="!#"
              className="bg-neutral-100 relative  group text-start mb-4 h-[50px] rounded-lg sm:w-[80%]  w-full flex items-center z-30 "
            >
              <i className="flex items-center justify-center h-full  text-lg text-white rounded-l-lg rounded-r-sm w-[100px] fa fa-google"></i>{' '}
              <span className="w-full text-gray-500 transition-all duration-500 group-hover:text-white">
                Sign up with Google{' '}
              </span>
              <div className="absolute top-0 left-0 w-16 h-full transition-all duration-500 bg-[#E93E30] rounded-l-lg -z-20 group-hover:w-full group-hover:rounded-r-lg"></div>
            </button>

            <p className="text-sm text-zinc-500">
              {' '}
              <span>........</span> Or, <a href="sign-in.html">sign up</a> with
              your email<span> ........</span>{' '}
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <p className="mb-2 font-medium text-zinc-600">User Name</p>
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Enter user name"
                  name="username"
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="text-gray-400 fa fa-user"></i>
                </div>
              </div>

              <label>
                <p className="mb-2 font-medium text-zinc-600">E-mail</p>
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg ring-white focus:ring-orange-400 bg-neutral-100 "
                  placeholder="Enter your email"
                  name="email"
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
              <label>
                <p className="mb-2 font-medium text-zinc-600">Re-Password</p>
              </label>
              <div className="relative mb-5">
                <input
                  type="password"
                  name="re_password"
                  className="w-full py-4 pl-10 pr-4 border-none rounded-lg bg-neutral-100 focus:ring-orange-400"
                  placeholder="Re-password"
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
                    id="m-agree"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <label className="ml-2 " htmlFor="m-agree">
                    I agree to the{' '}
                    <span className="text-zinc-900 hover:text-orange-400">
                      Terms & Conditions
                    </span>
                  </label>
                </div>
              </div>

              <div className="">
                <button className="relative group w-full mb-5 text-base bg-orange-400 z-30 border-black p-3.5 rounded-lg font-medium hover:text-white">
                  {' '}
                  Sign Up
                  <div
                    className="absolute left-0 w-10 h-[35px] bg-orange-500 -z-10  bottom-0 rounded-bl-lg rounded-tr-[85%] group-hover:w-full 
                  group-hover:h-full group-hover:rounded-lg transition-all duration-500"
                  ></div>
                </button>
              </div>

              <div className="text-sm text-center text-zinc-500">
                <p>
                  Already in Market?{' '}
                  <span
                    onClick={() => history('/login')}
                    className="text-orange-400 cursor-pointer"
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
