import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";
import auth from "../slice/auth";

export const store = configureStore({
  reducer: {
    config,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
