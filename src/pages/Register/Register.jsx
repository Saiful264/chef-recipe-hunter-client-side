import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    createUser(email, password)
    .then(userCredential => {
      const createdUser = userCredential.user;
      console.log(createdUser);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    })
  }

  const handleAccepted = (event) =>{
    SetAccepted(event.target.checked);
  }

  return (
    <div className="flex justify-center pt-5 bg-slate-50 py-12">
      <Form onSubmit={handleRegister} className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <h1 className="text-2xl font-bold">Register</h1>
        <div className="py-6 w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="pb-6 w-full">
          <input
            type="text"
            name="photoURL"
            placeholder="Photo Url"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="pb-6 w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input w-full max-w-xs"
          />
        </div>
        <div className="w-full pb-2">
          <input
            type="pasword"
            name="password"
            placeholder="Password"
            required
            className="input w-full max-w-xs"
          />
        </div>
        <p className="text-start text-base font-semibold">create a new acount<Link to="/login" className="text-indigo-700 underline pl-2">Login</Link></p>
        <button type="submit" className="btns-primary">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
