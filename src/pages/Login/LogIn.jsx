import React, { useContext, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const LogIn = () => {
  
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState(null);
  
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(userCredential => {
      const createdUser = userCredential.user;
      console.log(createdUser);
      form.reset();
      navigate(from, {replace: true});
    })
    .catch(error => {
      const errorCode  = error.code;
      setLoginError(error.message);
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
  }

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
        const loginUser = result.user;
        setUser(loginUser);
    })
    .catch((error)=>{
        console.log('error', setLoginError(error.message));
    })
}


const handleGithubSignIn = () =>{
  signInWithPopup(auth, githubProvider)
  .then((result)=> {
      const logInUser = result.user;
      setUser(logInUser);
  })
  .catch(error => {setLoginError(error.message)})
}


  return (
    <div className="flex justify-center pt-5 bg-slate-50 py-12">
      <Form onSubmit={handleLogIn} className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <h1 className="text-2xl font-bold">LogIn</h1>
        {loginError && <span className="text-2xl text-red-700">{loginError}</span>}
        <div className="py-6 w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="input w-full max-w-xs"
          />
        </div>
        <div className="w-full pb-2">
          <input
            type="password"
            name="password"
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
        <button onClick={handleGoogleSignIn} className="text-base flex items-center gap-3 font-semibold btns-primary">
        <span><FaGoogle/></span> Continue with google</button>
        </div>
        <button onClick={handleGithubSignIn} className="text-base flex items-center gap-3 font-semibold btns-primary">  
        <span><FaGithub/></span> Continue with github</button>
      </Form>
    </div>
  );
};

export default LogIn;
