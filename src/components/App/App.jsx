import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter";
import Navbar from "../Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../..";
import "./App.css";
import Loader from "../Loader/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {loading ? <Loader /> : <AppRouter />}
      </BrowserRouter>
    </div>
  );
};

export default App;
