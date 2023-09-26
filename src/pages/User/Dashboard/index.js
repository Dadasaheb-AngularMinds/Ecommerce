import React from 'react';
import BannerUserDash from '../../../components/User/DashboardComponents/Banner1';
import ProductsView from '../../../components/User/DashboardComponents/ProductsView';

const UserDashboard = () => {
  return (
    <div>
      <div className=''>
        <BannerUserDash />
        <ProductsView />
      </div>
    </div>
  );
};

export default UserDashboard;
