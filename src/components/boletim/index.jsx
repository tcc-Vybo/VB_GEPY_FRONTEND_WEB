import BoletimLinha from './boletim-line';
import './style.css';

export default function Boletim() {
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
        <span>ALUNO(A):Yuri Mendes Deodato</span>
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
        <BoletimLinha disciplina={'Matemática'} situacao={'Aprovado'} />
      </div>
    </div>
  );
}
