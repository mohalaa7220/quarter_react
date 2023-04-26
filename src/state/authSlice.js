import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";

const isBrowser = typeof window !== "undefined";

export const LoginAuth = createAsyncThunk("auth/login", async (formData) => {
  const response = await axiosInstance.post(`auth/login`, formData);
  return response.data;
});

export const userProfile = createAsyncThunk("auth/profile", async () => {
  const response = await axiosInstance.get("auth/profile");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: null,
    loading: false,
    message: null,
    isAuth: false,
    userProfileData: {},
    user: isBrowser && Cookies.get("token") ? Cookies.get("token") : [],
    token: isBrowser && Cookies.get("token") ? Cookies.get("token") : null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.isAuth = true;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, { expires: 1 });
        localStorage.setItem("isAuth", true);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(LoginAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(userProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfileData = action.payload;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
