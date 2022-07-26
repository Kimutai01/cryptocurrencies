import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectSearchTerm } from './searchSlice';

export const getCrypto = createAsyncThunk('crypto/getCrypto', async () => {
  const getResponse = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
  );
  const dat = getResponse.data;
  return dat;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCrypto.fulfilled]: (state, action) => action.payload,
  },
});
export const selectStocksData = (state) => state.crypto;
export const selectFilteredStocks = (state) => {
  const allStocks = selectStocksData(state);
  const searchTerm = selectSearchTerm(state);

  return allStocks.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
export default cryptoSlice.reducer;
