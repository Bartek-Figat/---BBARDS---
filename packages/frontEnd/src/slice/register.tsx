import { createSlice } from "@reduxjs/toolkit";
import { user } from "../api/services/api";
import type { RootState } from "../store/store";

type RegisterState = {
  status: "waiting" | "success" | "pending" | "error";
};

const initialState: RegisterState = {
  status: "waiting",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(user.endpoints.register.matchFulfilled, (state) => {
      state.status = "success";
    });
    builder.addMatcher(user.endpoints.register.matchPending, (state) => {
      state.status = "pending";
    });
    builder.addMatcher(user.endpoints.register.matchRejected, (state) => {
      state.status = "error";
    });
  },
});

export default registerSlice.reducer;
