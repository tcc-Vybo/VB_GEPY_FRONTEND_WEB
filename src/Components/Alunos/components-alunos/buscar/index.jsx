import React from "react";
import "./style.css";

export default function BuscarAlunos() {
  return (
    <div >
      <div className="container-secundario">
        <label className="label-buscar">
          Nome:
          <input
            type="text"
            placeholder="Digite o nome do aluno"
            className="input-buscar"
          ></input>
        </label>
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
