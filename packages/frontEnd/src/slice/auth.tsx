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
      return thunkAPI.rejectWithValue("");
    }
  }
);

interface AuthState {
  isLoggedIn: boolean;
  user: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {});
    builder.addCase(signup.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
