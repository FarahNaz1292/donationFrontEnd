import React from "react";
import userAuth from "../../../utils/AuthProvider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ element, allowedRole }) => {
  const { user, loading } = userAuth();

  if (loading) {
    return (
      <div className="min-h-screen max-w[100vh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to="/" />;
  }
  return element;
};

export default PrivateRoute;
