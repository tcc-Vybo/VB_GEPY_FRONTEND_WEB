import BuscaAlunoLinha from './bu-aluno-line';
import './style.css';

export default function BuscaAluno() {
  return (
    <div className="busca-aluno">
      <div className="busca-alunos-header">
        <p>Nome do aluno:</p>
        <input
          type="text"
          className="search-alunos"
        />
        <button>Pesquisar</button>
      </div>
      <div className="display-alunos">
        <div className="busca-aluno-linha">
          <p className="nome title">Nome</p>
          <p className="responsavel title">Responsável</p>
          <p className="acoes title">Ações</p>
        </div>
        <BuscaAlunoLinha
          nome={'Manuela Chagas Dias'}
          responsavel={'tem? kkk'}
        />
      </div>
    </div>
  );
}
