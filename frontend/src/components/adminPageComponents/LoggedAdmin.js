import React from 'react';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../store/UserContext';

const LoggedAdmin = props => {
    const { user, setUser } = useContext(UserContext);
    const logOut = () => {
        setUser(prev => !prev);
    }

    let loginStatus = null;
    if (user === false) {
        loginStatus = <Navigate to='/login' />;
    }
    return (
        <div>
            <button onClick={() => logOut()}>Wyloguj</button>
            {loginStatus}
        </div>
    )
}
export default LoggedAdmin;