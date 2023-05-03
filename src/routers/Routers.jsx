import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErroePage/ErrorPage';
import Main from '../layout/Main';
import LogIn from '../pages/Login/LogIn';
import Register from '../pages/Register/Register';

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
            }
        ]
    },
]);

export default router;