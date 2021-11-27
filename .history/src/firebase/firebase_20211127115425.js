// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuyM3LZUocMsWKJhfQ2TD-4P4YYXeLo_g",
  authDomain: "mynotebook-51872.firebaseapp.com",
  projectId: "mynotebook-51872",
  storageBucket: "mynotebook-51872.appspot.com",
  messagingSenderId: "578456499562",
  appId: "1:578456499562:web:7aab75d530c5652a51a113",
  measurementId: "G-SR797TMKSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);