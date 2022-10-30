import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

interface ActivateProps {
  token: string;
}

interface ActivateState {
  status: "waiting" | "success" | "pending" | "error";
  errorMessage: null | string;
}

const initialState: ActivateState = {
  status: "waiting",
  errorMessage: null,
};

export const confirmEmail = createAsyncThunk(
  "auth/activate",
  async ({ token }: ActivateProps, { rejectWithValue }) => {
    try {
      await AuthService.activate({ token });
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  }
);

export const activateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(confirmEmail.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(confirmEmail.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(confirmEmail.rejected, (state, action) => {
      state.status = "error";
      if (action.error.message) {
        state.errorMessage = action.error.message;
      } else {
        state.errorMessage = "Something went wrong. Try again later";
      }
    });
  },
});

export default activateSlice.reducer;
