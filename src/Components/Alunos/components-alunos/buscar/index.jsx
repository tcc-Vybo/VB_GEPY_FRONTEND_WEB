import React, { useState } from "react";
import "./style.css";

export default function BuscarAlunos() {
  const [stateSearchByName, setStateSearchByName] = useState("");

  const [stateArray, setStateArray] = useState([]);
  const tempArray = [];

  const handleFindByName = (e) => {
    const urlFindByName = `https://vb-gepy-backend-web.onrender.com/aluno/buscar/${stateSearchByName}`;

    e.preventDefault();
    try {
      fetch(urlFindByName)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((data) => {
          data.map((item, index) => {
            console.log(data[index].nomeCompleto);
            tempArray.push({
              nomeCompleto: data[index].nomeCompleto,
              nomeResponsavel: data[index].nomeResponsavel,
            });
          });
          setStateArray(tempArray);
          console.log(stateArray);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  return (
    <div className="container-primario">
      <div className="container-secundario-search">
        <div className="inputs-searchs">
          <form onSubmit={handleFindByName}>
            <input
              type="text"
              placeholder="Digite o nome do aluno"
              className="input-buscar"
              onChange={(e) => {
                setStateSearchByName(e.target.value);
              }}
            />

            <input type="submit" value="Gravar" />
          </form>
        </div>

        <div className="container-terciario">
          <div className="response-container">
            <div className="nav-buscar">
              <p>Nome</p>
              <p>Responsáveis</p>
              <p>Ações</p>
            </div>
            {stateArray.map((item, index) => {
              return (
                <div className="response-map" key={index}>
                  <span>{item.nomeCompleto}</span>
                  <span>{item.nomeResponsavel}</span>
                  <div>
                    <button className="actions-btn">Alterar</button>
                    <button className="actions-btn">Deletar</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
