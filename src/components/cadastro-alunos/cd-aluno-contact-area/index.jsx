import CadastroAlunoInput from '../cd-aluno-input';
import './style.css';

export default function AlunosInputAreaContacts() {
  return (
    <div className="inputs-area">
      <h3>Aluno</h3>
      <div className="input-line">
        <CadastroAlunoInput name={'Telefone'} />
      </div>
      <h3>Responsável</h3>
      <div className="input-line">
        <CadastroAlunoInput name={'Nome Completo'} />
        <CadastroAlunoInput name={'CPF'} />
        <CadastroAlunoInput name={'Relação  '} />
        <CadastroAlunoInput name={'Telefone'} />
      </div>
    </div>
  );
}
