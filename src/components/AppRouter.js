import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "..";
import { privateRoutes, publicRoutes } from "../routes";
// import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact={true} />
      ))}
      <Route path={"/*"} element={<Chat />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact={true} />
      ))}
      <Route path={"/*"} element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
