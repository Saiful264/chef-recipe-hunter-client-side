import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/chef-1.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-16 bg-slate-200">
      <div className="relative flex justify-between items-center ">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-cyan-200 h-12 w-12 rounded-full">
            <img className="w-7" src={logo} alt="logo" />
          </div>
          <span className="uppercase font-bold text-2xl">Chef's Recipe</span>
        </Link>
        <ul className="font-bold gap-9 hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default:")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              LogIn
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute z-100 top-0 left-0 w-full p-2 rounded-md bg-slate-200">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                  <div className="flex items-center justify-center bg-cyan-200 h-12 w-12 rounded-full">
                    <img className="w-7" src={logo} alt="logo" />
                  </div>
                  <span className="uppercase font-bold text-2xl">
                    Chef's Recipe
                  </span>
                </Link>

                <button
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-slate-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
              <div className="pl-4 pt-3">
              <ul className="font-bold gap-9">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default:"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    LogIn
                  </NavLink>
                </li>
              </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
