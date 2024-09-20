import React from 'react';
import './style.css';

export default function CadastrarAlunos() {
  return (
    <div className="container-alunos">
      <div className="container-secundario">
        <h1>Identificação</h1>
        <div className="inputs-identificacao">
          <div className="input-cadastro">
            <p>Nome Completo</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Data de Nascimento</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Cidade de Nascimento</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>UF de Nascimento</p>
            <input type="text" />
          </div>
        </div>
        <div className="inputs-identificacao">
          <div className="input-cadastro">
            <p>Nacionalidade</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Gênero</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Cor/Raça</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Necessidades Especiais</p>
            <input type="text" />
          </div>
        </div>
        <h1>Endereço Residencial</h1>
        <div className="inputs-identificacao">
          <div className="input-cadastro">
            <p>CEP</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Endereço</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Nº</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Complemento</p>
            <input type="text" />
          </div>
        </div>
        <div className="inputs-identificacao">
          <div className="input-cadastro">
            <p>Bairro</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>Município</p>
            <input type="text" />
          </div>
          <div className="input-cadastro">
            <p>UF</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="alunos-button">
        <button>Voltar</button>
        <button>Salvar</button>
      </div>
    </div>
  );
}
