import CadastroAlunoInput from '../cd-aluno-input';
import './style.css';

export default function AlunosInputAreaResidence() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={'CEP '} />
        <CadastroAlunoInput name={'Endereço'} />
        <CadastroAlunoInput name={'Nº'} />
        <CadastroAlunoInput name={'Complemento'} />
      </div>
      <div className="input-line">
        <CadastroAlunoInput name={'Bairro'} />
        <CadastroAlunoInput name={'Município'} />
        <CadastroAlunoInput name={'UF'} />
      </div>
    </div>
  );
}
