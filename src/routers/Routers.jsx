import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErroePage/ErrorPage';
import Main from '../layout/Main';
import LogIn from '../pages/Login/LogIn';
import Register from '../pages/Register/Register';
import Blog from '../pages/Blog/Blog';
import AboutUs from '../pages/AboutUs/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/login",
                element: <LogIn/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/aboutus",
                element: <AboutUs/>
            }
        ]
    },
]);

export default router;