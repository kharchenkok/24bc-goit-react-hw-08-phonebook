import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    regTokenSuccess(state, action) {
      return action.payload;
    },
    logTokenSuccess(state, action) {
      return action.payload;
    },
    logoutTokenSuccess(state, action) {
      return initialState;
    },
  },
});

const { actions, reducer } = tokenSlice;
export const { regTokenSuccess, logTokenSuccess, logoutTokenSuccess } = actions;

export default reducer;
