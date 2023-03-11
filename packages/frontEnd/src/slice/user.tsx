import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import AuthService from "../services/AuthService";

interface UserProps {
  name: string | null;
  email: string | null;
  errorMessage: null | string;
  status: "waiting" | "success" | "pending" | "error";
  isLogin: boolean;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SignInResponseProps {
  data: string;
  statusCode: number;
}

interface SignInValidationErrors {
  error: string;
}

interface GetUserProps {
  token: string;
}

interface GetUserDataResponse {
  data: {
    email: string;
    name: string;
  };
  statusCode: number;
}

const initialState: UserProps = {
  name: null,
  email: null,
  status: "waiting",
  isLogin: false,
  errorMessage: null,
};

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

export const signIn = createAsyncThunk<
  SignInResponseProps,
  SignInProps,
  { rejectValue: SignInValidationErrors }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login({
      email,
      password,
    });

    // if no data response.data ------------ {data: null, error: 'Bad Request', statusCode: 400}

    return response.data;
  } catch (err) {
    console.log("error.response ------------", err);
    const error = err as AxiosError<SignInValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.name = payload.data.name;
      state.email = payload.data.email;
      state.isLogin = true;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      console.log("payload ------------>", payload);
      // if no data payload ------------> {data: null, error: 'Bad Request', statusCode: 400}
      if (payload.data === null) {
        state.status = "error";
        state.isLogin = false;
      } else {
        state.status = "success";
        state.isLogin = true;
        localStorage.setItem("token", payload.data);
      }
    });
    builder.addCase(signIn.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.status = "error";
      if (payload) {
        state.errorMessage = payload.error;
      } else {
        state.errorMessage = "Something went wrong, please try later";
      }
    });
  },
});

export default userSlice.reducer;
