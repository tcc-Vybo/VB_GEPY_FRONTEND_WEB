export default function BuscaAlunoLinha({ nome, responsavel }) {
  return (
    <div className="busca-aluno-linha">
      <p className="nome">{nome}</p>
      <p className="responsavel">{responsavel}</p>
      <p className="acoes">
        <span>O</span>
        <span>X</span>
      </p>
    </div>
  );
}
