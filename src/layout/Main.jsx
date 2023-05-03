import React from 'react';
import NavBar from '../pages/SharePage/NavBar/NavBar';
import Footer from '../pages/SharePage/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;