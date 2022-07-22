import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../feature/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
