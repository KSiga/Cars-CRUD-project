import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../store/UserContext';

const list = [
    { name: "START", path: "/", exact: true },
    { name: "LIST", path: "/list" },
    { name: "LOGIN", path: '/login' },
]

const Navigation = () => {
    const { user } = useContext(UserContext);
    const menuList = list.map(item => (
        <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
    ))
    return (
        <nav>
            {menuList} {user === true ? 'Zalogowany' : 'Niezalogowany'}
        </nav>
    )
}
export default Navigation;