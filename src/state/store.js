import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import pagination from "./pagination";
import cart from "./cartSlice";
import auth from "./authSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    pagination,
    cart,
    auth,
  },
});
