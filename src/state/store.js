import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import pagination from "./pagination";
import cart from "./cartSlice";
import auth from "./authSlice";
import comments from "./commentsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    pagination,
    cart,
    auth,
    comments,
  },
});
