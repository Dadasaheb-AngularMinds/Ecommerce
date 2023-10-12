import React, { useState } from "react";
import PersonalInfo from "./Personalinfo";
import BottomTabs from "./BottomTabs";
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import store from "../../../redux/UserReducer/store";

const UserProfile = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
          <div className="max-h-full bg-[#ffffff] col-span-1 overflow-y-auto md:col-span-1">
            <div className="max-h-[900px] overflow-y-auto no-scrollbar flex justify-center p-5 pb-2">
              <img
                class="_3X2gOt"
                height="150px"
                width="150px"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
              />
            </div>
            <div className="flex flex-col items-center pb-3">
              <h3 className="text-xl text-neutral-800">Kanya Landage</h3>
            </div>
            <hr className="w-full p-0" />
            <Sidebar />
          </div>
          <div className="h-full bg-[#ffffff] col-span-1 overflow-y-auto no-scrollbar md:col-span-3 px-8 py-5">
            <PersonalInfo />
            <BottomTabs />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default UserProfile;
