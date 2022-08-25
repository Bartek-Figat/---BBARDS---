import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";

export const store = configureStore({
  reducer: {
    config,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
