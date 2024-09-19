import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";

export default function Alunos() {
  return (
    <div className="container-principal">
      <header className="header-alunos">
        <button>Cadastrar Alunos</button>
        <button>Buscar Alunos</button>
        <button>Alterar Alunos</button>
        <button>Deletar Alunos</button>
      </header>
      <Outlet />
    </div>
  );
}
