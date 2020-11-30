import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilterValue(state, action) {
      const { target } = action.payload;
      return target.value.toLowerCase();
    },
  },
});

const { actions, reducer } = filterSlice;
export const { getFilterValue } = actions;

export default reducer;
