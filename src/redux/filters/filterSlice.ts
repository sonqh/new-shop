import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  price?: string;
  theme?: string;
  time?: string;
  tier?: string;
}

const initialState: FilterState = {};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterState>) {
      return action.payload;
    },
    clearFilter() {
      return initialState;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export const selectFilter = (state: { filter: FilterState }) => state.filter;

export default filterSlice.reducer;
