import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const fetchComments = createAsyncThunk("fetchComments", async (id) => {
  const response = await axiosInstance.get(`comments/${id}`);
  return response.data;
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    dataComments: [],
    loading: false,
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
  },
});

export default commentsSlice.reducer;
