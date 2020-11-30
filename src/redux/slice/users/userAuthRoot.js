import { combineReducers } from "redux";

import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import authErrorSlice from "./authErrorSlice";

const userAuthRoot = combineReducers({
  token: tokenSlice,
  user: userSlice,
  authError: authErrorSlice,
});

export default userAuthRoot;
