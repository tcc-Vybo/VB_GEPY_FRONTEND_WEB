import CadastroAlunoInput from '../cd-aluno-input';
import './style.css';

export default function AlunosInputAreaDocuments() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={'RG '} />
        <CadastroAlunoInput name={'CPF'} />
        <CadastroAlunoInput name={'Data de Expedição'} />
        <CadastroAlunoInput name={'Orgão Expedidor'} />
        <button>Selecionar Arquivo</button>
      </div>
    </div>
  );
}
