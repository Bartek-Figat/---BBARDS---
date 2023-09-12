import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const location = useLocation();

  if (!localStorage.getItem("token"))
    return <Navigate to="/login" state={{ from: location }} replace />;

  return <Outlet />;
};
