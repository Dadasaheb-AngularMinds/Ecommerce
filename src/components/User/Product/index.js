import React from "react";
import Product from "./Product";

import TrendingProducts from "./TrendingProducts";
import Tabs from "./Tabs";
import { Provider } from "react-redux";
import store from "../../../redux/ProductReducers/store";

const ProductView = () => {
  return (
    <Provider store={store}>
      <div>
        <Product />
        <Tabs />
        <TrendingProducts />
      </div>
    </Provider>
  );
};

export default ProductView;
