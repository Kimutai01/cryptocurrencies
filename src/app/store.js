import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../feature/cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
