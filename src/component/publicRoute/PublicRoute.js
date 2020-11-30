import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import { isUserAuth } from '../../redux/selectors/authSelectors';
import { navigation } from '../../routes/constans';
import { useSelector } from "react-redux";

const PublicRoute = ({component:Component,...routeProps}) => {
    const userAuth=useSelector(state=>isUserAuth(state))
    return (
       <Route 
{...routeProps}
render={props=> userAuth && routeProps.restricted ? <Redirect to={navigation.contacts}/> : <Component {...props}/>}/>
    );
};

export default PublicRoute;

