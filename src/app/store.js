import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../feature/cryptoSlice";
import searchReducer from "../feature/searchSlice";

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    search: searchReducer,
  },
});

export default store;
