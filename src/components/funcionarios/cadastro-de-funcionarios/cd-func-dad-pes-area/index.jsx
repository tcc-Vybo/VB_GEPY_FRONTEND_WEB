import CadastroAlunoInput from "../../../cd-input";

export default function FuncionariosInputAreaDadosPes() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={"Nome Completo "} />
        <CadastroAlunoInput name={"Data de Nascimento"} />
        <CadastroAlunoInput name={"Gênero"} />
        <CadastroAlunoInput name={"Telefone"} />
      </div>
    </div>
  );
}
