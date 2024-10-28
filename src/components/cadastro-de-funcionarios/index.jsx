import { useState } from 'react';
import './style.css';
import FuncionariosInputAreaDadosPes from './cd-func-dad-pes-area';
import FuncionariosInputAreaDadosPro from './cd-func-dad-pro-area';
import FuncionariosInputAreaEndRes from './cd-func-end-res-area';
import FuncionariosInputAreaDocs from './cd-func-docs-area';

export default function CadastroFuncionarios() {
  return (
    <div className='cadastro-container'>
      <div>
        <div className='cadastro-hider'>
          <h1>Dados Pessoais</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDadosPes />
        </div>
        <div className='cadastro-hider'>
          <h1>Dados Profissionais</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDadosPro />
        </div>
        <div className='cadastro-hider'>
          <h1>Endereço Residencial</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaEndRes />
        </div>
        <div className='cadastro-hider'>
          <h1>Documentos</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDocs />
        </div>
      </div>
    </div>
  );
}
