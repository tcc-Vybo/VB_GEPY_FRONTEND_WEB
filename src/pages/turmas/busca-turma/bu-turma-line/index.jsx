export default function BuscaTurmaLinha({ aluno, responsavel, necessidades }) {
  return (
    <div className="busca-turmas-linha">
      <p className="aluno">{aluno}</p>
      <p className="responsavel-turma">{responsavel}</p>
      <p className="necessidades">{necessidades}</p>
      <div className="editar">
        <p>O</p>
      </div>
    </div>
  );
}
