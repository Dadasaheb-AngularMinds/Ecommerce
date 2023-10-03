import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  wishlist: [],
  user: { email: "kanya@gmail.com", password: "kanya@123" },
};

const productSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getProductDetails(state, action) {
      //api call and set response to product
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
  },
});
export const { addToCart, addToWishlist } = productSlice.actions;
export default productSlice.reducer;
