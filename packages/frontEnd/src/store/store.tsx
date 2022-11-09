import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import config from "../slice/collapsed";
import register from "../slice/register";
import login from "../slice/login";
import activate from "slice/activate";
import { userApi } from "../services/FetchUserData";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    config,
    register,
    login,
    activate,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
