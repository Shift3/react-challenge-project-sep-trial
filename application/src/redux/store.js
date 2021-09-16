import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});
