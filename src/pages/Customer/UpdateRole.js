import React from "react";
import img2 from "../../../src/assets/images/img2.jpg";
import Input from "../../components/form-controls/Input";

const UpdateRole = () => {
  return (
    <div className="">
      <div className="flex mb-3">
        <p className="text-2xl font-semibold font-header">Become a Seller</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <img src={img2} className="w-32 h-36" />
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm text-sm"
            >
              User Name
            </label>

            <Input placeholder="User Name" />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm">
              Organization
            </label>

            <Input />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm">
              First Name
            </label>

            <Input />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm">
              Last Name
            </label>

            <Input />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 text-sm">
              Email
            </label>

            <Input />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 text-sm">
              Password
            </label>

            <Input />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm">
              Role
            </label>
            <select
              type="text"
              id="State"
              name="State"
              // value={obj.state}
              // onChange={handleChange}
              class="w-auto rounded-md border-0 py-1.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm">
              Phone
            </label>

            <Input />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-1 text-xl font-semibold text-white bg-orange-500 rounded-md smooth-shadow hover:bg-orange-600 focus:outline-none font-header"
        >
          <span className="tracking-wider">Update</span>
        </button>
      </form>
    </div>
  );
};

export default UpdateRole;
