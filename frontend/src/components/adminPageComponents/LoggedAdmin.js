import React, { useState } from 'react';
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
        <div className='loggedAdmin'>
            <h1>Panel admina: </h1>
            <button className='loggedAdminButton' onClick={() => logOut()}>Wyloguj</button>
            {loginStatus}
        </div>
    )
}
export default LoggedAdmin;