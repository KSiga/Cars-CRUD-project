import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsPage from '../pages/CarsPage';
import LoginPage from '../pages/LoginPage';
import ListPage from '../pages/ListPage';
import ErrorPage from '../pages/ErrorPage';
import MoreInfoCar from '../components/listPageComponents/MoreInfoCar';
import LoggedAdmin from '../components/adminPageComponents/LoggedAdmin';

const Page = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<CarsPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/list/:id" element={<MoreInfoCar />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<LoggedAdmin />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default Page;