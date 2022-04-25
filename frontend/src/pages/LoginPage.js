import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../store/UserContext';


const LoginPage = props => {
    const { user, setUser } = useContext(UserContext);
    const signIn = () => {
        setUser(prev => !prev);
    }

    let loginStatus = null;
    if (user === true) {
        loginStatus = <Navigate to='/admin' />;
    }

    return (
        <div>
            <button onClick={() => signIn()}>Zaloguj</button>
            {loginStatus}
        </div>
    )
}

export default LoginPage;