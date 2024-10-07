import { useState } from 'react';
import './style.css';
import FuncionariosInputAreaDadosPes from './cd-func-dad-pes-area';
import FuncionariosInputAreaDadosPro from './cd-func-dad-pro-area';
import FuncionariosInputAreaEndRes from './cd-func-end-res-area';
import FuncionariosInputAreaDocs from './cd-func-docs-area';

export default function CadastroFuncionarios() {
  const [dadosPesVisisble, setDadosPesVisible] = useState(false);

  const [dadosProVisisble, setDadosProVisible] = useState(false);

  const [endRedVisible, setEndRedVisible] = useState(false);

  const [documentsVisible, setDocumentsVisible] = useState(false);

  const handleClickDadosPes = (e) => {
    e.stopPropagation();
    setDadosPesVisible(!dadosPesVisisble);
  };

  const handleClickDadosPro = (e) => {
    e.stopPropagation();
    setDadosProVisible(!dadosProVisisble);
  };

  const handleClickEndRes = (e) => {
    e.stopPropagation();
    setEndRedVisible(!endRedVisible);
  };

  const handleClickDocuments = (e) => {
    e.stopPropagation();
    setDocumentsVisible(!documentsVisible);
  };

  return (
    <div className="cadastro-container">
      <div>
        <div
          className="cadastro-hider"
          onClick={handleClickDadosPes}
        >
          <h1>Dados Pessoais</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {dadosPesVisisble && <FuncionariosInputAreaDadosPes />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickDadosPro}
        >
          <h1>Dados Profissionais</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {dadosProVisisble && <FuncionariosInputAreaDadosPro />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickEndRes}
        >
          <h1>Endereço Residencial</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {endRedVisible && <FuncionariosInputAreaEndRes />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickDocuments}
        >
          <h1>Documentos</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {documentsVisible && <FuncionariosInputAreaDocs />}
        </div>
      </div>
    </div>
  );
}
