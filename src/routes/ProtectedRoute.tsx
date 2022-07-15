import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const autenticated = localStorage.getItem("token");

  return autenticated ? <Outlet /> : <Navigate to="/login" />;
};
