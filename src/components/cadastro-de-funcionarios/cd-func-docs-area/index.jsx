import CadastroAlunoInput from '../../cd-input';

export default function FuncionariosInputAreaDocs() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={'RG'} />
        <CadastroAlunoInput name={'CPF'} />
        <CadastroAlunoInput name={'Data de Expedição'} />
        <CadastroAlunoInput name={'Orgão Expeditor'} />
        <button>Selecionar Arquivo</button>
      </div>
      <div className="input-line doc">
        <p>Carteira de vacina</p>
        <button>Selecionar Arquivo</button>
      </div>
    </div>
  );
}
