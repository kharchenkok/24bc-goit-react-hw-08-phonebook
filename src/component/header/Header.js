import React from 'react';
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { isUserAuth } from '../../redux/selectors/authSelectors';
import { navigation } from '../../routes/constans';
import UserMenu from '../userMenu/UserMenu';
import style from './Header.module.css'

const Header = () => {
    const userAuth=useSelector(state=>isUserAuth(state))
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <NavLink className={userAuth? style.nav__link : style.hidden } activeClassName={style.active} to={navigation.contacts}>Contacts</NavLink>
                <NavLink className={userAuth? style.hidden:style.nav__link } activeClassName={style.active} to={navigation.registration}>Registration</NavLink>
                <NavLink className={userAuth? style.hidden:style.nav__link } activeClassName={style.active} to={navigation.login}>Login</NavLink>
            </nav>
            {userAuth&&<UserMenu/> }
           
        </header>
    );
};

export default Header;