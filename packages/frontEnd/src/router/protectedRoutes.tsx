import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks";

export const ProtectedRoute = () => {
  const { isLogin } = useAppSelector((state) => state.user);
  const token = localStorage.getItem("token");

  if (isLogin) {
    return <Outlet />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/authentication" replace />;
};
