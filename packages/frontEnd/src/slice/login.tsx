import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

interface LoginProps {
  email: string;
  password: string;
}

interface ResponseProps {
  token: string;
}

interface LoginState {
  status: "waiting" | "success" | "pending" | "error";
  token: null | string;
}

export const signIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginProps, { rejectWithValue }) => {
    try {
      const response = await AuthService.login({
        email,
        password,
      });
      return response.data as ResponseProps;
    } catch (error) {
      const errorObject = error as Error;
      return rejectWithValue(errorObject.message);
    }
  }
);

const initialState: LoginState = {
  status: "waiting",
  token: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = "success";
      state.token = action.payload.token;
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default loginSlice.reducer;
