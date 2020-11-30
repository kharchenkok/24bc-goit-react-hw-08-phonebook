import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerOperation } from "../../redux/operations/authOperations";
import { getAuthError } from "../../redux/selectors/authSelectors";
import { resetAuthError } from "../../redux/slice/users/authErrorSlice";
import { navigation } from "../../routes/constans";
import style from "./RegistrationPage.module.css";
import Error from '../../component/error/Error'


const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const authUserError=useSelector(state=>getAuthError(state))
  const [regForm, setRegForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegForm((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(regForm);
    dispatch(registerOperation(regForm));
    setRegForm(initialState);
    setTimeout(() => dispatch(resetAuthError()), 2000)
  };
  return (
    <div>
      <h2 className={style.registration__title}>Registration</h2>
      {authUserError&& <Error/>}
      <form onSubmit={handleSubmit} className={style.registration__form}>
        <input
          onChange={handleChange}
          className={style.registration__form_input}
          type="text"
          name="name"
          value={regForm.name}
          placeholder="Name"
        ></input>
        <input
          onChange={handleChange}
          className={style.registration__form_input}
          type="email"
          name="email"
          value={regForm.email}
          placeholder="Email"
        ></input>
        <input
          onChange={handleChange}
          className={style.registration__form_input}
          type="password"
          name="password"
          value={regForm.password}
          placeholder="Password"
        ></input>
        <button className={style.registration__form_button} type="submit">
          Sing Up
        </button>
      </form>
      <p>
        If you already have an account please{" "}
        <NavLink className={style.link} to={navigation.login}>
          Login
        </NavLink>{" "}
      </p>
    </div>
  );
};

export default RegistrationPage;
