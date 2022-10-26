import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "store/hooks";

export const ProtectedRoute = () => {
  const { isLogin, successResponse } = useAppSelector((store) => store.login);
  return isLogin && successResponse.statusCode === 200 ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
