import React from "react";

const TextField = () => {
  return (
    <input
      type="text"
      name="price"
      id="price"
      class=" w-full rounded-md border-0 py-1.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      placeholder="0.00"
    />
  );
};

export default TextField;
