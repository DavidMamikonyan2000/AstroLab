import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const userid =
    JSON.parse(localStorage.getItem("accessToken")) == null ? false : true;
  return <>{userid ? <Outlet /> : <Navigate to="/login" />};</>;
}
