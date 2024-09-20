import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';

export default function Alunos() {
  return (
    <div className="container-principal">
      <header className="header-alunos">
        <div className="alunos-button">
          <button>Cadastrar Alunos</button>
        </div>
        <div className="alunos-button">
          <button>Buscar Alunos</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
