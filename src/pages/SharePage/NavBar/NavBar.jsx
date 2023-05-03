import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/chef-1.png";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center px-16 py-6 bg-slate-200">
        <Link className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-cyan-200 h-12 w-12 rounded-full">
            <img
              className="w-7"
              src={logo}
              alt="logo"
              srcset=""
            />
          </div>
          <span className="uppercase font-bold text-2xl">Chef's Recipe</span>
        </Link>
        <ul className="flex font-bold gap-4">
          <li>Home</li>
          <li>Blog</li>
          <li>LogIn</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
