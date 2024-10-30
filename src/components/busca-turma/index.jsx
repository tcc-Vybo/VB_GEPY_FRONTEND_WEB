import BuscaTurmaLinha from './bu-turma-line';
import './style.css';

export default function BuscaTurma() {
  return (
    <div className="busca-turmas">
      <div className="busca-turmas-header">
        <p>Turma :</p>
        <input type="text" />
      </div>
      <div className="display-turmas">
        <div className="busca-turmas-linha">
          <p className="aluno title">Aluno</p>
          <p className="responsavel-turma title">Responsável</p>
          <p className="necessidades">Necessidades Especiais</p>
          <p className="editar title">Editar</p>
        </div>
        <BuscaTurmaLinha
          aluno={'gusta'}
          responsavel={'quem quiser'}
          necessidades={'NÃO'}
        />
      </div>
    </div>
  );
}
