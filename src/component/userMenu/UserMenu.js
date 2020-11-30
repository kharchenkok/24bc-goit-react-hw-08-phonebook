import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { logoutOperation } from '../../redux/operations/authOperations';
import { getUserName } from '../../redux/selectors/authSelectors';
import style from './UserMenu.module.css'

const UserMenu = () => {
  const name=useSelector(state=>getUserName(state))
  const dispatch=useDispatch()
  const onLogout=()=>{
    dispatch(logoutOperation())
  }
    return (
        <div className={style.container}>
<img src='https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg' alt="" width="32" className={style.avatar} />
    <div className={style.name}>Welcome, {name}</div>
    {/* <button type="button"> */}
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
    );
};

export default UserMenu;