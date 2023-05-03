// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("envirrolment variable", import.meta.env.APIKEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.evn.APIKEY,
  authDomain: import.meta.evn.AUTHDOMAIN,
  projectId: import.meta.evn.PROJECTID,
  storageBucket: import.meta.evn.STORAGEBUCKET,
  messagingSenderId: import.meta.evn.MESSAGINGSENDERID,
  appId: import.meta.evn.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;