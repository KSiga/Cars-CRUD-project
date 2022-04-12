import React from 'react';
import { NavLink } from 'react-router-dom';
const list = [
    { name: "START", path: "/", exact: true },
    { name: "LIST", path: "/list" },
    { name: "ADMIN", path: '/admin' },
]
const Navigation = () => {
    const menuList = list.map(item => (
        <NavLink key={item.name} to={item.path} /*exact={item.exact ? item.exact : false}*/>{item.name}</NavLink>
    ))
    return (
        <nav>
            {menuList}
        </nav>
    )
}
export default Navigation;