import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ name = "", state = "", amenities = "" }, { getState }) => {
    const { page } = getState().pagination;
    const response = await axiosInstance.get(
      `product/?page=${page}${name ? `&name=${name}` : ""}${
        state ? `&state=${state}` : ""
      }${amenities ? `&amenities=${amenities}` : ""}`
    );
    return response.data;
  }
);

export const fetchLastProducts = createAsyncThunk(
  "lastProducts/fetch",
  async () => {
    const response = await axiosInstance.get(`product/last_products`);
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

export const fetchBookProduct = createAsyncThunk(
  "bookProduct/fetch",
  async ({ id, formData }) => {
    const response = await axiosInstance.post(
      `product/book_product/${id}`,
      formData
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    lastProducts: [],
    productDetails: [],
    error: null,
    loading: false,
    loadingBook: false,
    count: 0,
    message: null,
  },

  reducers: {
    clearMessage(state) {
      state.message = "";
    },
  },
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

    // lastProducts
    builder
      .addCase(fetchLastProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLastProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.lastProducts = action.payload;
      })
      .addCase(fetchLastProducts.rejected, (state, action) => {
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

    // BookProduct
    builder
      .addCase(fetchBookProduct.pending, (state) => {
        state.loadingBook = true;
      })
      .addCase(fetchBookProduct.fulfilled, (state, action) => {
        state.loadingBook = false;
        state.message = action.payload.message;
      })
      .addCase(fetchBookProduct.rejected, (state, action) => {
        state.loadingBook = true;
        state.error = action.error.message;
      });
  },
});
export const { clearMessage } = productsSlice.actions;

export default productsSlice.reducer;
