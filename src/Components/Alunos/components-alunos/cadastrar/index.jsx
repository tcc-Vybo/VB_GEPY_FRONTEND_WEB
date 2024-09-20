import React from 'react';
import './style.css';

export default function CadastrarAlunos() {
  return (
    <div className='container-alunos'>
      <div className='container-secundario'>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-um'>
            <p>Nome Completo</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois  '>
            <p>Data de Nasc</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Cidade de Nasc</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>UF de Nasc</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>UF de Nasc</p>
            <input type='text' />
          </div>
        </div>
        <div className='inputs-identificacao '>
          <div className='input-cadastro'>
            <p>Nacionalidade</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Gênero</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Cor/Raça</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Necessidades Especiais</p>
            <input type='text' />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>CEP</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Endereço</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Nº</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Complemento</p>
            <input type='text' />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-um'>
            <p>Bairro</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Município</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>UF</p>
            <input type='text' />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>RG</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>CPF</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Dt de Emissão</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Orgão Expeditor</p>
            <input type='text' />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>Tel. Aluno</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Nome do Responsavel</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>CPF do Responsavel</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Relação</p>
            <input type='text' />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Tel. Responsavel</p>
            <input type='text' />
          </div>
        </div>
      </div>
      <div className='alunos-button'>
        <button>Voltar</button>
        <button>Salvar</button>
      </div>
    </div>
  );
}
