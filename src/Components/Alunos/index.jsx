import React from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";

export default function Alunos() {
  return (
    <div className="container-principal">
      <header className="header-alunos">
        <div className="alunos-button">
          <Link to="/alunos/cadastrar">
            <button>Cadastrar Alunos</button>
          </Link>
        </div>
        <div className="alunos-header-button">
          <Link to="/alunos/buscar">
            <button>Buscar Alunos</button>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
