// import React, { Childfren } from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../Layout/AuthProvider';
import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from '../provider/AuthProvider';

const PrivatRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const location = useLocation(AuthContext)
    console.log(location.pathname)
    if(user){
        return children;
    }
    if(loading){
        return <div>Loading...</div>
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivatRoute;