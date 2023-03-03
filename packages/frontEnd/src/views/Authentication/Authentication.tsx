import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserData } from "slice/user";
import { Navigate } from "react-router-dom";

export const Authentication = () => {
  const token = localStorage.getItem("token");
  const { isLogin, status } = useAppSelector((state) => state.user);
  const error = status === "error";

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserData({ token }));
    }
  }, [dispatch, token]);

  if (!token || error) {
    return <Navigate to="/login" replace />;
  }

  if (isLogin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      <div> Authentication...</div>
    </div>
  );
};
