import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginOperation } from "../../redux/operations/authOperations";
import { navigation } from "../../routes/constans";
import style from "./LoginPage.module.css";

const initialState = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [logForm, setLogForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogForm((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(logForm);
    dispatch(loginOperation(logForm));
    setLogForm(initialState);
  };
  return (
    <div>
      <h2 className={style.login__title}>Login</h2>
      <form onSubmit={handleSubmit} className={style.login__form}>
        <input
          onChange={handleChange}
          className={style.login__form_input}
          type="email"
          name="email"
          value={logForm.email}
          placeholder="Email"
        ></input>
        <input
          onChange={handleChange}
          className={style.login__form_input}
          type="password"
          name="password"
          value={logForm.password}
          placeholder="Password"
        ></input>
        <button className={style.login__form_button} type="submit">
          Login
        </button>
      </form>
      <p>
        If you already haven't an account please{" "}
        <NavLink className={style.link} to={navigation.registration}>
          Sign up
        </NavLink>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
