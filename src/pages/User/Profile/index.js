import React, { useState } from 'react';
import PersonalInfo from './Personalinfo';
import BottomTabs from './BottomTabs';

const UserProfile = () => {
  
  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <div className="max-h-full bg-[#ffffff] col-span-1 overflow-y-auto md:col-span-1">
          <div className="max-h-[900px] overflow-y-auto no-scrollbar">
            {/* cols-span-1 */}
          </div>
        </div>
        <div className="h-full bg-[#ffffff] col-span-1 overflow-y-auto no-scrollbar md:col-span-3 px-8 py-5">
          <PersonalInfo />
          <BottomTabs />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
