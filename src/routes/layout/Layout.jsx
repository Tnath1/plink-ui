import React from "react";
import "./layout.scss"
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"


const Layout = () => {
  return (
    <div className="layout">
      <div className="navbarr">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
