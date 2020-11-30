import axios from "axios";

import {
  loginError,
  logoutError,
  registerError,
  getCurrentUserError,
} from "../slice/users/authErrorSlice";

import {
  logoutTokenSuccess,
  logTokenSuccess,
  regTokenSuccess,
} from "../slice/users/tokenSlice";
import {
  getCurrentUserSuccess,
  userlogoutSuccess,
  userLogSuccess,
  userRegSuccess,
} from "../slice/users/userSlice";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerOperation = (userData) => async (dispatch) => {
  try {
    const result = await axios.post("/users/signup", userData);
    token.set(result.data.token);
    dispatch(regTokenSuccess(result.data.token));
    dispatch(userRegSuccess(result.data.user));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const loginOperation = (userData) => async (dispatch) => {
  try {
    const result = await axios.post("/users/login", userData);
    token.set(result.data.token);
    dispatch(logTokenSuccess(result.data.token));
    dispatch(userLogSuccess(result.data.user));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logoutOperation = () => async (dispatch) => {
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logoutTokenSuccess());
    dispatch(userlogoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const getCurrentUserOperation = (persistedToken) => async (dispatch) => {
  try {
    token.set(persistedToken);
    const result = await axios.get("/users/current");
    dispatch(getCurrentUserSuccess(result.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
