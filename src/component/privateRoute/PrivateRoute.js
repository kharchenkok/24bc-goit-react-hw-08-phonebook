import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import { isUserAuth } from '../../redux/selectors/authSelectors';
import { navigation } from '../../routes/constans';
import {useSelector } from "react-redux";

const PrivateRoute = ({component:Component,...routeProps}) =>{
    const userAuth=useSelector(state=>isUserAuth(state))
    return( 
<Route 
{...routeProps}
render={props=> userAuth? <Component {...props}/>:<Redirect to={navigation.registration}/>} />)}

export default PrivateRoute;

