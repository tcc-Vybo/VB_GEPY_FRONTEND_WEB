export default function BuscaFuncLinha({ nome, funcao }) {
  return (
    <div className="busca-funcionario-linha">
      <p className="nome">{nome}</p>
      <p className="funcao">{funcao}</p>
    </div>
  );
}
