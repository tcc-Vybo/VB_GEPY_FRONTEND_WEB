import BuscaFuncLinha from "./bu-func-line";
import "./style.css";

export default function BuscaFuncionarios() {
  return (
    <div className="busca-funcionario">
      <div className="busca-funcionario-header">
        <p>Nome :</p>
        <input type="text" className="search-funcionarios" />
        <p>Função:</p>
        <input type="text" />
        <button>Pesquisar</button>
      </div>
      <div className="display-funcionarios">
        <div className="busca-funcionario-linha">
          <p className="nome title">Nome</p>
          <p className="funcao title">Responsável</p>
        </div>
        <BuscaFuncLinha nome={"gusta"} funcao={"techlead"} />
      </div>
    </div>
  );
}
