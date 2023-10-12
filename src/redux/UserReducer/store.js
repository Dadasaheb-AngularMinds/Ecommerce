// rootReducer.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import profileSLice from "./profileSLice";

const store = configureStore({
  reducer: {
    product: productSlice,
    profile: profileSLice,
  },
});

export default store;
