import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import InitialButtons from "../../Components/Card";
import { Outlet } from "react-router-dom";
import Alunos from "../../Components/Alunos";
import Turmas from "../../Components/Turmas";

export default function Home() {
  const alunos = true;
  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <div className="container-principal">
          {alunos && <Turmas />}
          {/* <InitialButtons /> */}
          {/* <Outlet /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
