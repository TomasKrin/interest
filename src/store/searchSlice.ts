import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./store";

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { onChange } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
