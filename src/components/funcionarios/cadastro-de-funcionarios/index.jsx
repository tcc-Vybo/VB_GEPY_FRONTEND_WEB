import { useState } from 'react';
import './style.css';
import FuncionariosInputAreaDadosPes from './cd-func-dad-pes-area';
import FuncionariosInputAreaDadosPro from './cd-func-dad-pro-area';
import FuncionariosInputAreaEndRes from './cd-func-end-res-area';
import FuncionariosInputAreaDocs from './cd-func-docs-area';


export default function CadastroFuncionarios() {

  const [dadosDocumentosPessoais, setDadosDocumentosPessoais] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    genero: '',
    telefone: '',
    email: '',
  });

  const [dadosDocumentosProfissionais, setDadosDocumentosProfissionais] = useState({
    cargo: '',
    departamento: '',
    dataAdmissao: '',
    telefone: '',
    email: '',
  });

  const [dadosDocumentosResidenciais, setDadosDocumentosResidenciais] = useState({
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    municipio: '',
    uf: ''
  });

  const [dadosDocumentosRegistro, setDadosDocumentosRegistro] = useState({
    numeroRegistro: '',
    cpf: '',
    dataEmissao: '',
    orgaoExpedidor: ''
  })

  const handlessetDadosDocumentosPessoaisChange = (name, value) => {
    setDadosDocumentosResidenciais({
      ...dadosDocumentosPessoais,
      [name]: value       // Atualiza o campo com base no "name"
    });
  };

  const handlesetDadosDocumentosProfissionaisChange = (name, value) => {
    setDadosDocumentosResidenciais({
      ...dadosDocumentosProfissionais,
      [name]: value       // Atualiza o campo com base no "name"
    });
  };

  const handlesetDadosDocumentosResidenciaisChange = (name, value) => {
    setDadosDocumentosResidenciais({
      ...dadosDocumentosResidenciais,
      [name]: value       // Atualiza o campo com base no "name"
    });
  };

  const handlesetDadosDocumentosRegistroChange = (name, value) => {
    setDadosDocumentosResidenciais({
      ...dadosDocumentosRegistro,
      [name]: value       // Atualiza o campo com base no "name"
    });
  };

  return (
    <div className='cadastro-container'>
      <div>
        <div className='cadastro-hider'>
          <h1>Dados Pessoais</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDadosPes handleChange={handlessetDadosDocumentosPessoaisChange}/>
        </div>
        <div className='cadastro-hider'>
          <h1>Dados Profissionais</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDadosPro handleChange={handlesetDadosDocumentosProfissionaisChange}/>
        </div>
        <div className='cadastro-hider'>
          <h1>Endereço Residencial</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaEndRes handleChange={handlesetDadosDocumentosResidenciaisChange}/>
        </div>
        <div className='cadastro-hider'>
          <h1>Documentos</h1>
          <p>S</p>
        </div>
        <div className='cadastro-inputs'>
          <FuncionariosInputAreaDocs handleChange={handlesetDadosDocumentosRegistroChange}/>
        </div>
      </div>
    </div>
  );
}
