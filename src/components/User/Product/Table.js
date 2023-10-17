import React from "react";

const Table = () => {
  return (
    <div className="container sm:py-5 sm:px-36">
      {" "}
      <table class="w-full text-sm text-left text-gray-500 ">
        <tbody>
          {[1, 2, 3, 4].map((item, index) => (
            <tr
              className={`${index % 2 !== 0 ? "bg-gray-100" : "bg-white"}`}
              key={index}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-1/4"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
