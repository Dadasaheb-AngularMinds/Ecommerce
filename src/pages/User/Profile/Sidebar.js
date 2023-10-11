import React from "react";

const Sidebar = () => {
  return (
    <div className="max-h-full overflow-y-auto grid-col-[3rem] md:col-span-1">
      <div className="max-h-[900px] overflow-y-auto no-scrollbar">
        <div class="max-w-screen-xl mx-auto  bg-[#ffffff]">
          <div class="sticky top-0 bg-[#ffffff] flex flex-col items-left">
            {/* <h2 class="font-bold text-2xl font-header text-orange-500 mt-2">
              Filters
            </h2> */}
          </div>

          <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto">
            <div class="">
              <details class="group p-3">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="uppercase">
                    {" "}
                    <span className="text-center">
                      <i class="fa fa-shopping-basket text-blue-500"></i>{" "}
                    </span>
                    <span className="ms-6 text-zinc-500">MY ORDERS </span>
                  </span>
                </summary>
              </details>
              <hr />

              <details class="group p-3 pb-0 flex-flex-col">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="uppercase">
                    {" "}
                    <span className="text-center">
                      <i class="fa fa-user text-lg text-blue-500"></i>{" "}
                    </span>
                    <span className="ms-6 text-zinc-500">
                      ACCOUNT SETTINGS{" "}
                    </span>
                  </span>
                </summary>
              </details>
              <div className="grid grid-rows-3">
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  Profile Information
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  Manage Address
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  PAN Card Information
                </div>
              </div>
              <hr />

              <details class="group p-3 pb-0 flex-flex-col">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="uppercase">
                    {" "}
                    <span className="text-center">
                      <i class="fa fa-credit-card-alt text-lg text-blue-500"></i>{" "}
                    </span>
                    <span className="ms-6 text-zinc-500">PAYMENTS </span>
                  </span>
                </summary>
              </details>
              <div className="grid grid-rows-3">
                <div className="flex justify-between py-2 text-sm r-2 p pl-14 text-neutral-800">
                  Gift Cards{" "}
                  <span className="pr-5 text-green-800">&#8377; 0 </span>
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  Saved UPI
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  Saved Cards
                </div>
              </div>
              <hr />

              <details class="group p-3 pb-0 flex-flex-col">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="uppercase">
                    {" "}
                    <span className="text-center">
                      <i class="fa fa-folder text-lg text-blue-500"></i>{" "}
                    </span>
                    <span className="ms-6 text-zinc-500">MY STUFF </span>
                  </span>
                </summary>
              </details>
              <div className="grid grid-rows-3">
                <div className="flex justify-between py-2 text-sm r-2 p pl-14 text-neutral-800">
                  My Coupons
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  My Reviews & Ratings
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  All Notifications
                </div>
                <div className="py-2 text-sm r-2 p pl-14 text-neutral-800">
                  My WishList
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
