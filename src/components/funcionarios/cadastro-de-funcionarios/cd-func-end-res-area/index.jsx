import CadastroAlunoInput from "../../../cd-input";



export default function FuncionariosInputAreaEndRes() {
  return (
    <div className="inputs-area">
      <div className="input-line">
        <CadastroAlunoInput name={"CEP "} />
        <CadastroAlunoInput name={"Endereço"} />
        <CadastroAlunoInput name={"Nº"} />
        <CadastroAlunoInput name={"Complemento"} />
        <CadastroAlunoInput name={"Bairro"} />
      </div>
      <div className="input-line">
        <CadastroAlunoInput name={"Município "} />
        <CadastroAlunoInput name={"UF"} />
      </div>
    </div>
  );
}
