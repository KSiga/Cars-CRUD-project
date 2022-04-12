import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsPage from '../pages/CarsPage';
import AdminPage from '../pages/AdminPage';
import ListPage from '../pages/ListPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<CarsPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default Page;