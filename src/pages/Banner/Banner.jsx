import React from "react";
import banner from "../../assets/banner/Cooking.gif";
import OurChef from "../OurChef/OurChef";

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
        <img className="lg:w-2/5" src={banner} alt=""/>
      </div>

      <OurChef />
    </div>
  );
};

export default Banner;
