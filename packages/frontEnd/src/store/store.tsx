import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";
import register from "../slice/register";

export const store = configureStore({
  reducer: {
    config,
    register,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
