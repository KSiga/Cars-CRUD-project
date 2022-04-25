import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../store/UserContext';


const LoginPage = props => {
    let userLogin = {
        login: 'log',
        password: 'pass',
    }
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext);

    let loginStatus = null;
    if (user === true) {
        loginStatus = <Navigate to='/admin' />;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (login === userLogin.login && password === userLogin.password) {
            setUser(prev => !prev);
        } else {
            setLogin('');
            setPassword('');
        }
    }

    const changeLoginHandler = e => {
        const value = e.target.value;
        setLogin(value);
    }

    const changePasswordHandler = e => {
        const value = e.target.value;
        setPassword(value);
    }

    return (
        <div className='loginForm'>
            <form onSubmit={handleSubmit}>
                <label>Login:</label>
                <input type='text' value={login} onChange={changeLoginHandler} />
                <label>Hasło:</label>
                <input type='password' value={password} onChange={changePasswordHandler} autoComplete="on" />
                <input type="submit" value="Zaloguj" />
            </form>
            {loginStatus}
        </div>
    )
}

export default LoginPage;