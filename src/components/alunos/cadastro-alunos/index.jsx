import { useState } from 'react';
import AlunosInputAreaContacts from './cd-aluno-contact-area';
import AlunosInputAreaDocuments from './cd-aluno-docs-area';
import AlunosInputAreaIdentific from './cd-aluno-ident-area';
import AlunosInputAreaResidence from './cd-aluno-res-area';
import './style.css';

export default function CadastroAlunos() {
  const [identificationOpen, setIdentificationOpen] = useState(false);

  const handleIdentificationClick = () => {
    setIdentificationOpen(!identificationOpen);
  };

  return (
    <div className='cadastro-container'>
      <div>
        <div className='cadastro-title' onClick={handleIdentificationClick}>
          <h1>Identificação</h1>
        </div>
        <div className='cadastro-inputs'>
          <AlunosInputAreaIdentific open={identificationOpen} />
        </div>
        <div className='cadastro-title'>
          <h1>Endereço Residencial</h1>
        </div>
        <div className='cadastro-inputs'>
          <AlunosInputAreaResidence />
        </div>
        <div className='cadastro-title'>
          <h1>Documentos</h1>
        </div>
        <div className='cadastro-inputs'>
          <AlunosInputAreaDocuments />
        </div>
        <div className='cadastro-title'>
          <h1>Contato</h1>
        </div>
        <div className='cadastro-inputs'>
          <AlunosInputAreaContacts />
        </div>
      </div>
    </div>
  );
}
