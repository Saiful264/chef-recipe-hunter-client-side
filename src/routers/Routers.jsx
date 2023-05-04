import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErroePage/ErrorPage";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import Banner from "../pages/Banner/Banner";
import SingleChef from "../pages/SingleChef/SingleChef";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Banner/>
      },
      {
        path: 'login',
        element: <LogIn/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'aboutus',
        element: <AboutUs/>
      },
      {
        path: "singleChef/:id",
        element: <PrivateRouter><SingleChef/></PrivateRouter>,
        loader: ({params})=> fetch(`https://chef-recipe-hunter-server-side-saiful264.vercel.app/chef's/${params.id}`)
      }
    ]
  }
])
  

export default router;
