import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import "../Navbar/style.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <img className="nav-logo" src={Logo} />

        <div className="fast-search">
          <p>Pesquisa Rápida: </p>
          <input className="input-nav" placeholder="Pesquisar"></input>
        </div>
      </nav>
    </div>
  );
}
