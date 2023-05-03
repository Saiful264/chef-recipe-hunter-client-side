import React from "react";
import NavBar from "../pages/SharePage/NavBar/NavBar";
import Footer from "../pages/SharePage/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
