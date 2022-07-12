import React from "react";
import Header from "../Components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const login = JSON.parse(sessionStorage.getItem("loginUser"));

  return login ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
