// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRnRJRJ2XwXHROawG3xXenVeoAGFOmidw",
    authDomain: "chef-recipe-hunter-clien-61b40.firebaseapp.com",
    projectId: "chef-recipe-hunter-clien-61b40",
    storageBucket: "chef-recipe-hunter-clien-61b40.appspot.com",
    messagingSenderId: "498040792010",
    appId: "1:498040792010:web:545895c5c4e80bc487a533"
  };
  
//   console.log("envirrolment variable", import.meta.env.VITE_PASS);

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: import.meta.env.APIKEY,
//   authDomain: import.meta.env.AUTHDOMAIN,
//   projectId: import.meta.env.PROJECTID,
//   storageBucket: import.meta.env.STORAGEBUCKET,
//   messagingSenderId: import.meta.env.MESSAGINGSENDERID,
//   appId: import.meta.env.APPID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;