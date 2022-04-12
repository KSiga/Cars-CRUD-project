import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import imageHeader1 from '../images/carHeader1.jpg';
import imageHeader2 from '../images/carHeader2.jpg';
import imageHeader3 from '../images/carHeader3.jpg';
import HeaderChangeImages from '../images/HeaderChangeImages';

const Header = () => {
    return (
        <>
            <Routes>
                <Route path="*" exact element={<HeaderChangeImages />} />
            </Routes>
        </>
    )
}
// <Route render={() => (<img src={imageHeader3} alt="header3" />)} />
export default Header;