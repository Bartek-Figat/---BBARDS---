import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";
import register from "../slice/register";
import activate from "slice/activate";
import user from "slice/user";

export const store = configureStore({
  reducer: {
    config,
    register,
    activate,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
