import React from 'react';
import { Route, Routes, Switch, useLocation } from 'react-router-dom';
import { Component } from 'react';

const HeaderChangeImages = () => {

    const randomHeaderPhoto = Math.floor(Math.random() * 2 + 1); // losuje 1 albo 2
    let url = require(`./carHeader${randomHeaderPhoto}.jpg`); // i takie zdjęcie przypisuje

    const location = useLocation();
    if (location.pathname === '/admin') { // jeśli jesteśmy na '/admin' to przypisuje konkretne zdjęcie
        url = require(`./carHeader3.jpg`);
    }

    return (
        <>
            <img src={url} alt="header" />
        </>
    )
}

export default HeaderChangeImages;