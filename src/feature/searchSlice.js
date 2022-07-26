import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "coins",
  initialState: "",
  reducers: {
    searchItem: (state, action) => action.payload,
  },
});

export const { searchItem } = searchSlice.actions;

export const selectSearchItem = (state) => state.search;

export default searchSlice.reducer;
