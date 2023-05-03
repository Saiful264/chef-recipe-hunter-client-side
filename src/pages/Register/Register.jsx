import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center pt-5 bg-slate-50 py-12">
      <div className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <h1 className="text-2xl font-bold">Register</h1>
        <div className="py-6 w-full">
          <input
            type="text"
            placeholder="Name"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="pb-6 w-full">
          <input
            type="text"
            placeholder="Photo Url"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="pb-6 w-full">
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
        <p className="text-start text-base font-semibold">create a new acount<Link to="/login" className="text-indigo-700 underline pl-2">Login</Link></p>
        <button type="submit" className="btn-primary">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
