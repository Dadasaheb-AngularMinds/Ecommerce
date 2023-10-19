import React from "react";
import img2 from "../../../src/assets/images/img2.jpg";

const UpdateRole = () => {
  return (
    <div className="">
      <div className="flex mb-3">
        <p className="text-2xl font-semibold font-header">Become a Seller</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img src={img2} className="w-32 h-36" />
          <button className="bg-gray-100">upload Profile</button>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              User Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={obj.first_name}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-600">
              Organization
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              // value={obj.last_name}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={obj.first_name}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
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
              // value={obj.last_name}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={obj.email}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="text"
              id="City"
              name="City"
              // value={obj.city}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Role
            </label>
            <select
              type="text"
              id="State"
              name="State"
              // value={obj.state}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="Country"
              name="Country"
              // value={obj.country}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm sm:w-full md:w-3/4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-xl font-semibold text-white bg-orange-500 rounded-md smooth-shadow hover:bg-orange-600 focus:outline-none font-header"
        >
          <span className="tracking-wider">Update</span>
        </button>
      </form>
    </div>
  );
};

export default UpdateRole;
