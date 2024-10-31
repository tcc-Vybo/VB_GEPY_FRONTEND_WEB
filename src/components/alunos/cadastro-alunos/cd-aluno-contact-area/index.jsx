import CadastroInput from '../../../cd-input';

export default function AlunosInputAreaContacts() {
  return (
    <div className="inputs-area">
      <h3>Aluno</h3>
      <div className="input-line">
        <CadastroInput name={"Telefone"} />
      </div>
      <h3>Responsável</h3>
      <div className="input-line">
        <CadastroInput name={"Nome Completo"} />
        <CadastroInput name={"CPF"} />
        <CadastroInput name={"Relação  "} />
        <CadastroInput name={"Telefone"} />
      </div>
    </div>
  );
}
