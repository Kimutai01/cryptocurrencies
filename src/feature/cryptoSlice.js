import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$6800.00",
    change: "+0.00",
    changePercent: "0.00%",
    marketCap: "$1.8B",
    volume: "$1.8B",
    circulatingSupply: "1.8B",
    maxSupply: "1.8B",
    lastUpdated: "1:00 AM",
  },
  {
    id: 2,

    name: "Ethereum",
    symbol: "ETH",
    price: "$6800.00",
    change: "+0.00",
    changePercent: "0.00%",
    marketCap: "$1.8B",
    volume: "$1.8B",
    circulatingSupply: "1.8B",
    maxSupply: "1.8B",
    lastUpdated: "1:00 AM",
  },
];

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
});

export default cryptoSlice.reducer;
