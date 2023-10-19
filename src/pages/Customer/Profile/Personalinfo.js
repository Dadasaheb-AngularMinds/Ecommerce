import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  toggleEditFlag,
  setobjToStore,
} from "../../../redux/UserReducer/profileSLice";

const PersonalInfo = () => {
  const editFlag = useSelector((state) => state?.profile?.editFlag);
  const personalInfo = useSelector((state) => state?.profile?.PersonalInfo);

  const [obj, setobj] = useState({
    first_name: "Dadasaheb",
    last_name: "Patil",
    email: "dadasaheb181097@gmail.com",
    gender: "",
    city: "Baner,Pune",
    state: "Maharashtra",
    country: "India",
    address: "Sri Laxmi Devi PG, Pancard Club road ,Baner , Pune, 411045.",
  });
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setobj({
      ...obj,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setobj({ ...obj, gender: e.target.value });
  };

  console.log("personalInfo", obj);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("first", obj);

    dispatch(setobjToStore(obj));
    dispatch(toggleEditFlag(editFlag));
    return toast.success("User Profile updated successfully.", {
      autoClose: 3000,
    });
  };

  const editForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={obj.first_name}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={obj.last_name}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={obj.email}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600">
                City
              </label>
              <input
                type="text"
                id="City"
                name="City"
                value={obj.city}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                State
              </label>
              <input
                type="text"
                id="State"
                name="State"
                value={obj.state}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-600">
                Country
              </label>
              <input
                type="text"
                id="Country"
                name="Country"
                value={obj.country}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label className="block text-gray-600">Gender</label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleGenderChange}
                    className="text-blue-500 form-radio focus:ring-transparent"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleGenderChange}
                    className="text-blue-500 form-radio focus:ring-transparent"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleGenderChange}
                    className="text-blue-500 form-radio focus:ring-transparent"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={obj.address}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
                rows="2" // You can adjust the number of rows
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-1/3 px-4 py-1 text-xl font-semibold text-white bg-orange-500 rounded-md smooth-shadow hover:bg-orange-600 focus:outline-none font-header"
          >
            <span className="tracking-wider">Update</span>
          </button>
        </form>
      </>
    );
  };

  return (
    <div>
      <div className="flex mb-3">
        <p className="text-2xl font-semibold font-header">
          Personal Information
        </p>
        <i
          className="mt-1 ml-3 text-2xl text-blue-500 transition-all duration-200 cursor-pointer fa fa-pencil-square-o hover:scale-105"
          aria-hidden="true"
          onClick={() => dispatch(toggleEditFlag(editFlag))}
        ></i>
      </div>
      {editFlag ? (
        editForm()
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                First Name
              </label>
              <input
                readOnly
                type="text"
                id="name"
                name="name"
                value={obj.first_name}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-gray-600">
                Last Name
              </label>
              <input
                readOnly
                type="text"
                id="last_name"
                name="last_name"
                value={obj.last_name}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                readOnly
                type="email"
                id="email"
                name="email"
                value={obj.email}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600">
                City
              </label>
              <input
                readOnly
                type="text"
                name="city"
                value={obj.city}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                State
              </label>
              <input
                readOnly
                type="text"
                name="State"
                value={obj.state}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-600">
                Country
              </label>
              <input
                readOnly
                type="text"
                id="Country"
                name="Country"
                value={obj.country}
                onChange={handleChange}
                className="w-full py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label className="block text-gray-600">Gender</label>
              {obj.gender}
              {/* <div>
                <label className="inline-flex items-center">
                  <input
                    readOnly
                    type="radio"
                    name="gender"
                    value="male"
                    checked={obj.gender === "male"}
                    onChange={handleChange}
                    className="text-blue-500 form-radio"
                  />
                  <span className="ml-2">Male</span>
                </label>

                <label className="inline-flex items-center ms-3">
                  <input
                    readOnly
                    type="radio"
                    name="gender"
                    value="male"
                    checked={obj.gender === "male"}
                    onChange={handleChange}
                    className="text-blue-500 form-radio"
                  />
                  <span className="ml-2">Female</span>
                </label>

                <label className="inline-flex items-center ms-3">
                  <input
                    readOnly
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={obj.gender === "male"}
                    onChange={handleChange}
                    className="text-blue-500 form-radio"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div> */}
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <textarea
                readOnly
                id="address"
                name="address"
                value={obj.address}
                onChange={handleChange}
                className="w-full px-4 py-1 bg-gray-200 border-none rounded-sm ring-0 focus:ring-0 sm:w-full md:w-3/4 focus:outline-none"
                rows="2" // You can adjust the number of rows
              />
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PersonalInfo;
