import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "services/AuthService";

interface UserProps {
  name: string | null;
  email: string | null;
  errorMessage: null | string;
  status: "waiting" | "success" | "pending" | "error";
  isLogin: boolean;
}
interface GetUserDataResponse {
  email: string | null;
  name: string | null;
  statusCode: number;
}

interface GetUserProps {
  token: string;
}

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async ({ token }: GetUserProps, thunkAPI) => {
    try {
      const response = await AuthService.confirmUser({
        token,
      });
      return response.data as GetUserDataResponse;
    } catch (error) {
      const errorObject = error as Error;

      return thunkAPI.rejectWithValue(errorObject.message);
    }
  }
);

const initialState: UserProps = {
  name: null,
  email: null,
  errorMessage: null,
  status: "waiting",
  isLogin: false,
};

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      console.log("getUserData", payload);
      state.status = "success";
      state.name = payload.name;
      state.email = payload.email;
      state.isLogin = true;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default userDataSlice.reducer;
