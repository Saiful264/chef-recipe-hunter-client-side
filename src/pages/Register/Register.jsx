import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [regError, setRegError] = useState();
  const auth = getAuth(app);
  const from = location.state?.from?.pathname || "/";

  console.log(updateUserProfile);

  console.log(updateUserProfile);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError("Please provide a valid email");
      return;
    }

    if (password < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(createdUser);
        updateUserProfile(name, photoUrl).then()
        .catch((error) => {
          const errormessage = error.message;
          console.log(errormessage);
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegError(errorMessage);
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="flex justify-center pt-5 bg-slate-50 py-12">
      <Form
        onSubmit={handleRegister}
        className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
      >
        <h1 className="text-2xl font-bold">Register</h1>
        {regError && <span className="text-2xl text-red-700">{regError}</span>}
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
        {emailError && <span className="error">{emailError}</span>}
        <div className="w-full pb-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input w-full max-w-xs"
          />
        </div>
        {passwordError && <span className="error">{passwordError}</span>}
        <p className="text-start text-base font-semibold">
          create a new acount
          <Link to="/login" className="text-indigo-700 underline pl-2">
            Login
          </Link>
        </p>
        <button type="submit" className="btns-primary">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
