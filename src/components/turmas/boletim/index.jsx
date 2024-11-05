import BoletimLinha from './boletim-line';
import './style.css';

export default function Boletim() {
  const alunoTeste = [
    {
      disciplina: {
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
      },
      disciplina: {
        id: 2,
        nome: 'MATEMATICA',
        descricao: 'aaaaaaaa',
        notas: {
          notaPrimeiroBim: 7,
          faltaPrimeiroBim: 5,
          notaSegundoBim: 2,
          faltaSegundoBim: 5,
          notaTerceiroBim: 9,
          faltaTerceiroBim: 5,
          notaQuartoBim: 9,
          faltaQuartoBim: 5,
          situacao: 'aprovado',
        },
      },
    },
  ];

  return (
    <div className='boletim'>
      <div className='boletim-header'>
        <div className='boletim-header-input'>
          <h2>Turma</h2>
          <div>
            <input type='text' />
            <span>9º ANO B</span>
          </div>
        </div>
        <div className='boletim-header-input'>
          <h2>Aluno</h2>
          <div>
            <input type='text' />
          </div>
        </div>
      </div>
      <div className='aluno-buscado'>
        <span>ALUNO(A):teste</span>
        <span>TURMA: 9º ANO B</span>
      </div>
      <div className='boletim-area'>
        <div className='boletim-area-header'>
          <div className='disciplina'>
            <p>Disciplina</p>
          </div>
          <div className='notas-e-faltas'>
            <div className='nota'>
              <span>Notas</span>
              <span>1º bim</span>
            </div>
            <div className='falta'>
              <span>Faltas</span>
              <span>1º bim</span>
            </div>
          </div>
          <div className='notas-e-faltas'>
            <div className='nota'>
              <span>Notas</span>
              <span>2º bim</span>
            </div>
            <div className='falta'>
              <span>Faltas</span>
              <span>2º bim</span>
            </div>
          </div>
          <div className='notas-e-faltas'>
            <div className='nota'>
              <span>Notas</span>
              <span>3º bim</span>
            </div>
            <div className='falta'>
              <span>Faltas</span>
              <span>3º bim</span>
            </div>
          </div>
          <div className='notas-e-faltas'>
            <div className='nota'>
              <span>Notas</span>
              <span>4º bim</span>
            </div>
            <div className='falta'>
              <span>Faltas</span>
              <span>4º bim</span>
            </div>
          </div>
          <div className='situacao'>
            <p>Situacao</p>
          </div>
        </div>
        {alunoTeste.map((aluno) => {
          return (
            <BoletimLinha
              disciplina={aluno.disciplina.nome}
              notaBimUm={aluno.disciplina.notas.notaPrimeiroBim}
              faltasBimUm={aluno.disciplina.notas.faltaPrimeiroBim}
              notaBimDois={aluno.disciplina.notas.notaPrimeiroBim}
              faltasBimDois={aluno.disciplina.notas.faltaSegundoBim}
              notaBimTres={aluno.disciplina.notas.notaTerceiroBim}
              faltasBimTres={aluno.disciplina.notas.faltaTerceiroBim}
              notaBimQuatro={aluno.disciplina.notas.notaQuartoBim}
              faltasBimQuatro={aluno.disciplina.notas.faltaQuartoBim}
              situacao={aluno.disciplina.notas.situacao}
            />
          );
        })}
      </div>
    </div>
  );
}
