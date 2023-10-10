import React, { useState } from 'react';
import Loader from '../../../components/Loader';
import BannerUserDash from './Banner1';
import ProductsView from './ProductsView';
import SessionTimeout from '../../../components/User/SessionTimeout.js';

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
