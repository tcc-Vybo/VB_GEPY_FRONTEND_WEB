import CadastroAlunoInput from '../cd-aluno-input';
import './style.css';

export default function AlunosInputAreaIdentific() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={'Nome Completo'} />
        <CadastroAlunoInput name={'Data de Nascimento'} />
        <CadastroAlunoInput name={'Cidade de Nascimento'} />
        <CadastroAlunoInput name={'UF'} />
      </div>
      <div className="input-line">
        <CadastroAlunoInput name={'Nacionalidade'} />
        <CadastroAlunoInput name={'Gênero'} />
        <CadastroAlunoInput name={'Cor/Raça'} />
        <CadastroAlunoInput name={'Necessidades'} />
        <CadastroAlunoInput name={'Turma'} />
      </div>
    </div>
  );
}
