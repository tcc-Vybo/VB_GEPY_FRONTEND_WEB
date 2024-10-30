import CadastroAlunoInput from '../../cd-input';

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
      <div className="input-line doc">
        <p>Carteirinha de vacina</p>
        <button>Selecionar Arquivo</button>
      </div>
      <div className="input-line doc">
        <p>Histórico escolar</p>
        <button>Selecionar Arquivo</button>
      </div>
    </div>
  );
}
