import { createSlice } from "@reduxjs/toolkit";
import { user } from "../api/services/api";
import type { RootState } from "../store/store";

type ActivateState = {
  status: "waiting" | "success" | "pending" | "error";
  errorMessage: null | string;
};

const initialState: ActivateState = {
  status: "waiting",
  errorMessage: null,
};

const slice = createSlice({
  name: "activate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(user.endpoints.activate.matchFulfilled, (state) => {
      state.status = "success";
    });
    builder.addMatcher(user.endpoints.activate.matchPending, (state) => {
      state.status = "pending";
    });
    builder.addMatcher(
      user.endpoints.activate.matchRejected,
      (state, action) => {
        state.status = "error";
        if (action.error.message) {
          state.errorMessage = action.error.message;
        } else {
          state.errorMessage = "Something went wrong. Try again later";
        }
      }
    );
  },
});

export default slice.reducer;

export const selectActivate = (state: RootState) => state.activate;
