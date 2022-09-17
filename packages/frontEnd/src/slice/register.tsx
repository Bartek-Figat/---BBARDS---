import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const signUp = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password, repeatPassword }: RegisterProps,
    thunkAPI
  ) => {
    try {
      const response = await AuthService.register({
        name,
        email,
        password,
        repeatPassword,
      });
      return response.data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkAPI.rejectWithValue(errorObject.message);
    }
  }
);

interface RegisterState {
  status: "waiting" | "success" | "pending" | "error";
}

const initialState: RegisterState = {
  status: "waiting",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default registerSlice.reducer;
