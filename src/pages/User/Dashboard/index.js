import React, { useState } from 'react';
import BannerUserDash from '../../../components/User/DashboardComponents/Banner1';
import ProductsView from '../../../components/User/DashboardComponents/ProductsView';
import Loader from '../../../components/Loader';

const UserDashboard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BannerUserDash />
          <ProductsView />
        </div>
      )}
    </>
  );
};

export default UserDashboard;
