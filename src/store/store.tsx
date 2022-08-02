import { configureStore } from "@reduxjs/toolkit";
import config from "../slice/collapsed";

const store = configureStore({
  reducer: {
    config,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
