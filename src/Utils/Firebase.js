// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXWMyJjEeuF_EZa9NUc85jSp5S7gg5LLg",
  authDomain: "netflixgpt-4a881.firebaseapp.com",
  projectId: "netflixgpt-4a881",
  storageBucket: "netflixgpt-4a881.appspot.com",
  messagingSenderId: "151124908967",
  appId: "1:151124908967:web:3f6613cec6f441ea593482",
  measurementId: "G-ZBKH0F6DMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();