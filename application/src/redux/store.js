import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/login/loginSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});
