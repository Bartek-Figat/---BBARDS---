import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getUserData } from "slice/user";

export const ProtectedRoute = () => {
  const { status, email } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !email) {
      dispatch(getUserData({ token }));
    }
  }, [token, dispatch, email]);

  if (status === "success" || (token && email)) {
    return <Outlet />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/login" replace />;
};
