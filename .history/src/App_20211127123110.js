import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Navbar from './'
const firebaseConfig = {
  apiKey: "AIzaSyCuyM3LZUocMsWKJhfQ2TD-4P4YYXeLo_g",
  authDomain: "mynotebook-51872.firebaseapp.com",
  projectId: "mynotebook-51872",
  storageBucket: "mynotebook-51872.appspot.com",
  messagingSenderId: "578456499562",
  appId: "1:578456499562:web:7aab75d530c5652a51a113",
  measurementId: "G-SR797TMKSJ"
};
firebase.initializeApp( firebaseConfig );

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;