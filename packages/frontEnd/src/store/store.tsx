import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";
import register from "../slice/register";
import login from "../slice/login";

export const store = configureStore({
  reducer: {
    config,
    register,
    login,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
