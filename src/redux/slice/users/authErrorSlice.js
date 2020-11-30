import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

const authErrorSlice = createSlice({
  name: "authError",
  initialState,
  reducers: {
    registerError(state, action) {
      return action.payload;
    },
    loginError(state, action) {
      return action.payload;
    },
    logoutError(state, action) {
      return action.payload;
    },
    getCurrentUserError(state, action) {
      return action.payload;
    },
    resetAuthError(state,action){
      return initialState
    }
  },
});

const { actions, reducer } = authErrorSlice;
export const { registerError, loginError, logoutError,getCurrentUserError,resetAuthError } = actions;

export default reducer;
