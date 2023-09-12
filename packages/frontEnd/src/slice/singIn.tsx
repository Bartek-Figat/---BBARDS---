import { createSlice } from "@reduxjs/toolkit";
import { user } from "../api/services/api";
import type { RootState } from "../store/store";

interface UserProps {
  name: string | null;
  email: string | null;
  errorMessage: null | string;
  status: "waiting" | "success" | "pending" | "error";
  isLogin: boolean;
}

const initialState: UserProps = {
  name: null,
  email: null,
  status: "waiting",
  isLogin: false,
  errorMessage: null,
};

export const singInSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      user.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token, isLogin }: { token: string; isLogin: boolean } =
          payload.data;
        if (!token) {
          state.status = "error";
          state.isLogin = false;
          localStorage.removeItem("token");
        } else {
          state.status = "success";
          state.isLogin = isLogin;
          localStorage.setItem("token", token);
        }
      }
    );
    builder.addMatcher(user.endpoints.login.matchPending, (state) => {
      state.status = "pending";
    });
    builder.addMatcher(user.endpoints.login.matchRejected, (state) => {
      state.isLogin = false;
      state.status = "error";
      localStorage.removeItem("token");
    });
  },
});

export default singInSlice.reducer;

export const selectSingIn = (state: RootState) => state.login;
