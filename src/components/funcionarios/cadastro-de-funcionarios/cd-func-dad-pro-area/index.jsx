import CadastroAlunoInput from '../../cd-input';

export default function FuncionariosInputAreaDadosPro() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={'Cargo '} />
        <CadastroAlunoInput name={'Departamento'} />
        <CadastroAlunoInput name={'Data de Admissão'} />
      </div>
    </div>
  );
}
