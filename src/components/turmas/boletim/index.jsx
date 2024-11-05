import BoletimLinha from './boletim-line';
import './style.css';

export default function Boletim() {
  const alunoTeste = [
    {
      disciplinas: {
        id: 1,
        nome: 'PORTUGUES',
        descricao: 'aaaaaaaa',
        notas: {
          notaPrimeiroBim: 10,
          faltaPrimeiroBim: 5,
          notaSegundoBim: 10,
          faltaSegundoBim: 5,
          notaTerceiroBim: 10,
          faltaTerceiroBim: 5,
          notaQuartoBim: 10,
          faltaQuartoBim: 5,
          situacao: 'aprovado',
        },
        id: 2,
        nome: 'MATEMATICA',
        descricao: 'aaaaaaaa',
        notas: {
          notaPrimeiroBim: 7,
          faltaPrimeiroBim: 1,
          notaSegundoBim: 2,
          faltaSegundoBim: 2,
          notaTerceiroBim: 9,
          faltaTerceiroBim: 1,
          notaQuartoBim: 9,
          faltaQuartoBim: 0,
          situacao: 'reprovado',
        },
      },
    },
  ];

  return (
    <div className="boletim">
      <div className="boletim-header">
        <div className="boletim-header-input">
          <h2>Turma</h2>
          <div>
            <input type="text" />
            <span>9º ANO B</span>
          </div>
        </div>
        <div className="boletim-header-input">
          <h2>Aluno</h2>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="aluno-buscado">
        <span>ALUNO(A):teste</span>
        <span>TURMA: 9º ANO B</span>
      </div>
      <div className="boletim-area">
        <div className="boletim-area-header">
          <div className="disciplina">
            <p>Disciplina</p>
          </div>
          <div className="notas-e-faltas">
            <div className="nota">
              <span>Notas</span>
              <span>1º bim</span>
            </div>
            <div className="falta">
              <span>Faltas</span>
              <span>1º bim</span>
            </div>
          </div>
          <div className="notas-e-faltas">
            <div className="nota">
              <span>Notas</span>
              <span>2º bim</span>
            </div>
            <div className="falta">
              <span>Faltas</span>
              <span>2º bim</span>
            </div>
          </div>
          <div className="notas-e-faltas">
            <div className="nota">
              <span>Notas</span>
              <span>3º bim</span>
            </div>
            <div className="falta">
              <span>Faltas</span>
              <span>3º bim</span>
            </div>
          </div>
          <div className="notas-e-faltas">
            <div className="nota">
              <span>Notas</span>
              <span>4º bim</span>
            </div>
            <div className="falta">
              <span>Faltas</span>
              <span>4º bim</span>
            </div>
          </div>
          <div className="situacao">
            <p>Situacao</p>
          </div>
        </div>
        {alunoTeste.map((aluno) => {
          return (
            <BoletimLinha
              key={aluno.disciplinas.id}
              disciplina={aluno.disciplinas.nome}
              notaBimUm={aluno.disciplinas.notas.notaPrimeiroBim}
              faltasBimUm={aluno.disciplinas.notas.faltaPrimeiroBim}
              notaBimDois={aluno.disciplinas.notas.notaPrimeiroBim}
              faltasBimDois={aluno.disciplinas.notas.faltaSegundoBim}
              notaBimTres={aluno.disciplinas.notas.notaTerceiroBim}
              faltasBimTres={aluno.disciplinas.notas.faltaTerceiroBim}
              notaBimQuatro={aluno.disciplinas.notas.notaQuartoBim}
              faltasBimQuatro={aluno.disciplinas.notas.faltaQuartoBim}
              situacao={aluno.disciplinas.notas.situacao}
            />
          );
        })}
      </div>
    </div>
  );
}
