import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "store/hooks";

export const ProtectedRoute = () => {
  const { isLogin } = useAppSelector((store) => store.login);
  const token = localStorage.getItem("token");
  // eslint-disable-next-line no-extra-boolean-cast
  return !!token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
