import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const AddComment = createAsyncThunk(
  "addComments",
  async ({ id, formData }) => {
    const response = await axiosInstance.post(
      `comments_product/${id}`,
      formData
    );
    return response.data;
  }
);

export const fetchComments = createAsyncThunk("fetchComments", async (id) => {
  const response = await axiosInstance.get(`comments_product/${id}`);
  return response.data;
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    dataComments: [],
    loading: false,
    loadingAdd: false,
    message: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.dataComments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = true;
      });

    // AddComments
    builder
      .addCase(AddComment.pending, (state) => {
        state.loadingAdd = true;
      })
      .addCase(AddComment.fulfilled, (state, action) => {
        state.loadingAdd = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(AddComment.rejected, (state, action) => {
        state.loadingAdd = false;
      });
  },
});

export default commentsSlice.reducer;
