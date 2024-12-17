import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for doesn't exist or encountered an error.</p>
      <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
