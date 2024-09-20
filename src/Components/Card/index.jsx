import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";

export default function HomeInicial() {
  return (
    <div className="home-infos">
      <img src={Logo} className="logo" />
      <h1 className="bemvindo-mensagem">Bem vindo, Diretor!</h1>
      <h2 className="modulos-mensagem">Acesse os módulos do sistema ao lado</h2>
      <Outlet />
    </div>
  );
}
