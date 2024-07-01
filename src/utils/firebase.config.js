// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlCsFnbfJsL8nBGIleJ9uZ4_Cwrp5YxxA",
  authDomain: "netlfix-872ca.firebaseapp.com",
  projectId: "netlfix-872ca",
  storageBucket: "netlfix-872ca.appspot.com",
  messagingSenderId: "24579721383",
  appId: "1:24579721383:web:10bcd32271b32dbe517382",
  measurementId: "G-69892HRVPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
