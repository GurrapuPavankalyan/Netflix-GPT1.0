// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy01yT89U3p5lnxJil38GmQ0D6QMh0sbE",
  authDomain: "netflixgpt-e3d89.firebaseapp.com",
  projectId: "netflixgpt-e3d89",
  storageBucket: "netflixgpt-e3d89.appspot.com",
  messagingSenderId: "887015451844",
  appId: "1:887015451844:web:ca3fa07f73923934486d91",
  measurementId: "G-DXXVNCFSBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
