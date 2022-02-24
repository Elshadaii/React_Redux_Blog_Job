import React from "react";
import { Navigate, Route } from "react-router-dom";
const PrivateRoute = ({ role, children }) => {
  try {
    const response = localStorage.getItem("user");
    const data = JSON.parse(response);

    if (data && data.role === role) {
      return children;
    }
    return <Navigate to="/login" />;
  } catch (e) {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
