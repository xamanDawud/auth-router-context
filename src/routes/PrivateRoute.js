import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <div>Loading...</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
