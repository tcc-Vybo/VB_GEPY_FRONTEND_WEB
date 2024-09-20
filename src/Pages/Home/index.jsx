import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <div className="container-principal">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
