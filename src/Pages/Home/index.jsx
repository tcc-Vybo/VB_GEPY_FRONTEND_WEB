import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Logo from "../../Assets/Images/Logo.png";
import "./style.css";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <div className="container-principal">
          <div className="mensagem-bemvindo">
            <img src={Logo} className="logo" />
            <h1 className="bemvindo">Bem vindo, Diretor!</h1>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
