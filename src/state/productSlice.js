import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ name = "", state = "" }, { getState }) => {
    const { page } = getState().pagination;
    const response = await axiosInstance.get(
      `product/?page=${page}${name ? `&name=${name}` : ""}${
        state ? `&state=${state}` : ""
      }`
    );
    return response.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetch",
  async (id) => {
    const response = await axiosInstance.get(`product/${id}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    productDetails: [],
    error: null,
    loading: false,
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });

    // Product Details
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
