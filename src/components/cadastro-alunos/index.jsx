import { useState } from 'react';
import AlunosInputAreaDocuments from './cd-aluno-docs-area';
import AlunosInputAreaIdentific from './cd-aluno-ident-area';
import AlunosInputAreaResidence from './cd-aluno-res-area';
import './style.css';
import AlunosInputAreaContacts from './cd-aluno-contact-area';

export default function CadastroAlunos() {
  const [identificationVisisble, setIndentificationVisible] = useState(false);

  const [residenceVisible, setResidenceVisible] = useState(false);

  const [documentsVisible, setDocumentsVisible] = useState(false);

  const [contactVisible, setContactVisible] = useState(false);

  const handleClickIdent = (e) => {
    e.stopPropagation();
    setIndentificationVisible(!identificationVisisble);
  };

  const handleClickRes = (e) => {
    e.stopPropagation();
    setResidenceVisible(!residenceVisible);
  };

  const handleClickDoc = (e) => {
    e.stopPropagation();
    setDocumentsVisible(!documentsVisible);
  };

  const handleClickCon = (e) => {
    e.stopPropagation();
    setContactVisible(!contactVisible);
  };

  return (
    <div className="cadastro-container">
      <div>
        <div
          className="cadastro-hider"
          onClick={handleClickIdent}
        >
          <h1>Identificação</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {identificationVisisble && <AlunosInputAreaIdentific />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickRes}
        >
          <h1>Endereço Residencial</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {residenceVisible && <AlunosInputAreaResidence />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickDoc}
        >
          <h1>Documentos</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {documentsVisible && <AlunosInputAreaDocuments />}
        </div>
        <div
          className="cadastro-hider"
          onClick={handleClickCon}
        >
          <h1>Contato</h1>
          <p>S</p>
        </div>
        <div className="cadastro-inputs">
          {contactVisible && <AlunosInputAreaContacts />}
        </div>
      </div>
    </div>
  );
}
