import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchItem: "",
  },
  reducers: {
    searchTitle: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const {searchTitle} = searchSlice.actions;

export default searchSlice.reducer;
