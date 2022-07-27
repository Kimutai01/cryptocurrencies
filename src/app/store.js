import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../redux/cryptoSlice';
import searchReducer from '../redux/searchSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    search: searchReducer,
  },
});

export default store;
