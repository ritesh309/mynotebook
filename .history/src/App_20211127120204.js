import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "--------------------",
  authDomain: "--------------------",
  databaseURL: "--------------------",
  projectId: "--------------------",
  storageBucket: "--------------------",
  messagingSenderId: "--------------------",
  appId: "--------------------",
  measurementId: "--------------------",
};
firebase.initializeApp(firebaseConfig);

const App = () => {
  return <div>Hello there</div>;
};

export default App;