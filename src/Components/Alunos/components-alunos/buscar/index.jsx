import React from "react";
import "./style.css";

export default function BuscarAlunos() {
  return (
    <div className="container-primario">
      <div className="container-secundario-search">
        <div className="inputs-searchs">
          <input
            type="text"
            placeholder="Digite o nome do aluno"
            className="input-buscar"
          />
          
        </div>

        <div className="container-terciario">
          <div className="nav-buscar">
            <p>Nome</p>
            <p>Responsáveis</p>
            <p>Ações</p>
          </div>
        </div>
      </div>
    </div>
  );
}
