import Navbar from "../Components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/shared/Footer";
import { useState } from "react";
import "./../App.css";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto bg-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
