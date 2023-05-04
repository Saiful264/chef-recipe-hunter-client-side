import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex justify-center pt-5 bg-slate-50 py-12">
      <div className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <h1 className="text-2xl font-bold">LogIn</h1>
        <div className="py-6 w-full">
          <input
            type="email"
            placeholder="Email"
            required
            className="input w-full max-w-xs"
          />
        </div>
        <div className="w-full pb-2">
          <input
            type="pasword"
            placeholder="Password"
            required
            className="input w-full max-w-xs"
          />
        </div>
        <p className="text-start text-base font-semibold">create a new acount<Link to="/register" className="text-indigo-700 underline pl-2">Register</Link></p>
        <button type="submit" className="btns-primary">
          LogIn
        </button>

        <div className="py-4">
        <button className="text-base font-semibold btns-primary"> Continue with google</button>
        </div>
        <button className="text-base font-semibold btns-primary"> Continue with github</button>
      </div>
    </div>
  );
};

export default LogIn;
