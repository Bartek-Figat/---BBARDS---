import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getUserData } from "slice/user";

export const ProtectedRoute = () => {
  const { status, isLogin } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !isLogin) {
      dispatch(getUserData({ token }));
    }
  }, [token, dispatch, isLogin]);

  if (status === "success" || (token && isLogin)) {
    return <Outlet />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (status === "waiting" || status === "pending") {
    return <div>Loading...</div>;
  }

  return <Navigate to="/login" replace />;
};
