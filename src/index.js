import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgC-qdFtVhhai6kQqWI7L4RLogbA4E4Do",
  authDomain: "react-chat-f264a.firebaseapp.com",
  projectId: "react-chat-f264a",
  storageBucket: "react-chat-f264a.appspot.com",
  messagingSenderId: "605982203577",
  appId: "1:605982203577:web:759814b820b9852938c568",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        firestore,
        auth,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
