import { configureStore } from "@reduxjs/toolkit";
import { user } from "../api/services/api";
import ActivateUser from "../slice/activate";
import SingIn from "../slice/singIn";
import collapsed from "../slice/collapsed";

export const store = configureStore({
  reducer: {
    [user.reducerPath]: user.reducer,
    activate: ActivateUser,
    login: SingIn,
    collapsed,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(user.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
