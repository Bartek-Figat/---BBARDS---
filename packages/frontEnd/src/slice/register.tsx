import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const signup = createAsyncThunk(
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
    builder.addCase(signup.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(signup.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default registerSlice.reducer;
