import React from 'react';

const ProductTable = () => {
  return (
    <div class="h-screen overflow-x-auto  no-scrollbar mx-10">
      <div class="h-2/3 no-scrollbar overflow-x-auto border-2 mt-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3 text-base">
                <span>Image</span>
              </th>
              <th scope="col" class="px-6 py-3 text-base">
                Product
              </th>
              <th scope="col" class="px-6 py-3 text-base">
                Qty
              </th>
              <th scope="col" class="px-6 py-3 text-base">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {[1, 2, 3, 4, 56, 6].map((item, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-32 p-4">
                  <img
                    src="https://wphix.com/html/blackwood-prv/blackwood/assets/img/cart/cart-1.jpg"
                    alt="Apple Watch"
                  />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  Apple Watch
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <button
                      class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        required
                      />
                    </div>
                    <button
                      class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2">
        <div className="">
          <input className='w-1/2 py-3 pl-10 pr-4 border rounded-lg md:w-1/2 sm:w-1/3 focus:outline-orange-400 ' placeholder='Coupon code...'/>
          <button className='px-5 py-3 ml-3 transition-all duration-300 bg-orange-400 border border-orange-300 rounded-md hover:bg-orange-300'>Apply coupon</button>
        </div>
        <div className="space-y-2">
           <p className='text-2xl font-bold font-header'>Cart Totals</p>
           <div className='flex justify-between px-5 py-2 border'>
            <span className='font-bold font-header'>Subtotal</span>
            <span>$250.00</span>
           </div>
           <div className='flex justify-between px-5 py-2 border'>
            <span className='font-bold font-header'>Total</span>
            <span>$250.00</span>
           </div>
          <button className='px-5 py-3 transition-all duration-300 bg-orange-400 border border-orange-300 rounded-md hover:bg-orange-300'>Proceed to Checkout</button>

        </div>
         
      </div>
    </div>
  );
};

export default ProductTable;
