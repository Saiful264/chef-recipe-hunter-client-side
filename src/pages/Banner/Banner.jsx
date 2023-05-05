import React from "react";
import banner from "../../assets/banner/Cooking.gif";
import OurChef from "../OurChef/OurChef";
import logo from "../../assets/logo/cooking.png";

const Banner = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-between px-16 bg-slate-50">
        <div className="text-center pt-3 lg:text-left">
          <h1 className="text-xl lg:text-5xl text-slate-900 font-bold uppercase pb-5">
            Exploring the World of Chefs and Their Craft
          </h1>
          <p className="text-xl font-medium pr-3 pl-3">
            Their role extends beyond preparing food, as they are responsible
            for managing kitchen operations and creating menus. Chefs can
            specialize in a particular type of cuisine or cooking technique,
            adding their unique touch to each dish they create.
          </p>
          <div className="pt-6">
            <button className="font-bold btns-primary uppercase">
              Explor recipes
            </button>
          </div>
        </div>
        <img className="lg:w-2/5" src={banner} alt="" />
      </div>

      <OurChef />

      <div>
        <div className="text-center py-11">
          <h1 className="text-6xl font-sans font-bold italic pb-2">
            Our Service
          </h1>
          <p className="text-xl font-semibold">
            you specialize in catering for weddings, parties, or other special
            events, this title could be a good fit.
          </p>
        </div>

        <div className="flex justify-between px-28">
          <div className="bg-slate-100 rounded p-10">
            <img className="w-20 h-20" src={logo} alt="" />
            <div className="pt-8">
              <h2 className="font-extrabold text-xl text-gray-700 pb-2">
                job title
              </h2>
              <p className="text-base font-medium text-gray-400">
                Demo text :Their role
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded p-10">
            <img className="w-20 h-20" src={logo} alt="" />
            <div className="pt-8">
              <h2 className="font-extrabold text-xl text-gray-700 pb-2">
                job title
              </h2>
              <p className="text-base font-medium text-gray-400">
                Demo text :Their role
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded p-10">
            <img className="w-20 h-20" src={logo} alt="" />
            <div className="pt-8">
              <h2 className="font-extrabold text-xl text-gray-700 pb-2">
                job title
              </h2>
              <p className="text-base font-medium text-gray-400">
                Demo text :Their role
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded p-10">
            <img className="w-20 h-20" src={logo} alt="" />
            <div className="pt-8">
              <h2 className="font-extrabold text-xl text-gray-700 pb-2">
                job title
              </h2>
              <p className="text-base font-medium text-gray-400">
                Demo text :Their role
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
