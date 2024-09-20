import React from "react";
import "./style.css";

export default function BuscarAlunos() {
  return (
    <div className="container-alunos">
      <div className="container-secundario">
        <div className="pesquisa">
          <label className="label-buscar">Nome do Aluno: </label>
          <input
            type="text"
            placeholder="Digite o Nome do Aluno"
            className="input-buscar"
          ></input>
        </div>
        <div className="resultados"></div>
      </div>
      <div className="alunos-button">
        <button>Voltar</button>
        <button>Salvar</button>
      </div>
    </div>
  );
}
