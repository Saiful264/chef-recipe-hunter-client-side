import React from "react";
import logo from "../../../assets/logo/chef-1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="px-5 py-6 lg:px-24 lg:py-28  bg-gray-950 mt-28">
        <div className="grid grid-cols lg:grid-cols-6 pb-10">
          <div className="col-span-2">
            <h3 className="text-white font-extrabold text-3xl pb-5">
            <Link className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-cyan-200 h-12 w-12 rounded-full">
            <img
              className="w-7"
              src={logo}
              alt="logo"
            />
          </div>
          <span className="uppercase font-bold text-2xl">Chef's Recipe</span>
        </Link>
            </h3>
            <p className="text-slate-300 font-normal text-base w-5/6 pb-5">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Company
            </h1>
            <p className="text-slate-300 font-normal text-base">About</p>
            <p className="text-slate-300 font-normal text-base">Us Work</p>
            <p className="text-slate-300 font-normal text-base">Latest News</p>
            <p className="text-slate-300 font-normal text-base">Careers</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Chef's
            </h1>
            <p className="text-slate-300 font-normal text-base">John Smith</p>
            <p className="text-slate-300 font-normal text-base">
            Maria Rodriguez
            </p>
            <p className="text-slate-300 font-normal text-base"> David Lee</p>
            <p className="text-slate-300 font-normal text-base">Michael Chang</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Support
            </h1>
            <p className="text-slate-300 font-normal text-base">Help Desk</p>
            <p className="text-slate-300 font-normal text-base">Sales</p>
            <p className="text-slate-300 font-normal text-base">
              Become a Partner
            </p>
            <p className="text-slate-300 font-normal text-base">Developers</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Contact
            </h1>
            <p className="text-slate-300 font-normal text-base">
              524 Broadway , NYC
            </p>
            <p className="text-slate-300 font-normal text-base">
              +1 777 - 978 - 5570
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between pt-11">
          <p className="text-slate-400">@2023 CHEF'S RECIP. All Rights Reserved</p>
          <p className="text-slate-400">Powered by CHEF'S RECIP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
