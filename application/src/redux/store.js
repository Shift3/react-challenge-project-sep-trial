import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginSlice from "../components/login/loginSlice";

const persistConfig = {
  key: 'auth',
  storage,
}

const persistedLogin = persistReducer(persistConfig, loginSlice);

 const store = configureStore({
  reducer: {
    login: persistedLogin,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
