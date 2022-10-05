import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import type { AxiosError } from "axios";

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
  errorMessage: null | string;
}

interface ValidationErrors {
  error: string;
}

export const signIn = createAsyncThunk<
  ResponseProps,
  LoginProps,
  { rejectValue: ValidationErrors }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login({
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState: LoginState = {
  status: "waiting",
  token,
  errorMessage: null,
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
      if (action.payload?.error) {
        state.errorMessage = action.payload.error;
      } else {
        state.errorMessage = "Something went wrong, please try later";
      }
    });
  },
});

export default loginSlice.reducer;
