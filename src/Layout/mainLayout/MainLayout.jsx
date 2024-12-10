import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/sharedComponents/Navbar";
import Footer from "../../Components/sharedComponents/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
