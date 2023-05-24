import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const addOrderItem = createAsyncThunk(
  "addOrderItem/addOrderItem",
  async (formData) => {
    const response = await axiosInstance.post(`order/order_items/`, formData);
    return response.data;
  }
);

const OrderItemSlice = createSlice({
  name: "OrderItem",
  initialState: {
    loading: false,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrderItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrderItem.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(addOrderItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default OrderItemSlice.reducer;
