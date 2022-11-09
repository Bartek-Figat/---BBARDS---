import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const location = useLocation();

  // eslint-disable-next-line no-extra-boolean-cast
  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
