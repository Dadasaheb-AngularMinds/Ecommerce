import React from "react";
import Product from "./Product";

import TrendingProducts from "./TrendingProducts";
import Tabs from "./Tabs";

const ProductView = () => {
  return (
    <div>
      <Product />
      <Tabs />
      <TrendingProducts />
    </div>
  );
};

export default ProductView;
