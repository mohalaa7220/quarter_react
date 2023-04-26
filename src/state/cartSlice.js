import { createSlice, createSelector } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const initialState =
  isBrowser && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index === -1) {
        state.push({ id, name, price, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    updateQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity = action.payload.quantity;
      }
      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      if (isBrowser) {
        localStorage.removeItem("cart");
      }
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export const selectCartItemCount = createSelector(selectCart, (cart) =>
  cart.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector(selectCart, (cart) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

export default cartSlice.reducer;
