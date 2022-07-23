import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCrypto = createAsyncThunk("crypto/getCrypto", async () => {
  const getResponse = await axios
    .get(
      "https://financialmodelingprep.com/api/v3/actives?apikey=e5f07c74bba65323ca5c6a6031fb167e"
    )
    .catch((err) => {
      console.log("error", err);
    });
  const dat = getResponse.data;
  console.log(dat);
  const lala = Object.keys(dat).map((key) => ({
    id: key,
    ...dat[key[0]],
  }));
  return lala;
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCrypto.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default cryptoSlice.reducer;
