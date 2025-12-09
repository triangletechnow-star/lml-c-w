import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    // authorization logic
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" replace />;
}
