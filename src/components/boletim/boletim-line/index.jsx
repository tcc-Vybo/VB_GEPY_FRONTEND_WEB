export default function BoletimLinha({ disciplina, situacao }) {
  return (
    <div className='boletim-linha'>
      <div className='disciplina'>
        <p>{disciplina}</p>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span>10</span>
        </div>
        <div className='falta'>
          <span>2</span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span></span>
        </div>
        <div className='falta'>
          <span></span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span></span>
        </div>
        <div className='falta'>
          <span></span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span></span>
        </div>
        <div className='falta'>
          <span></span>
        </div>
      </div>
      <div className='situacao'>
        <p>{situacao}</p>
      </div>
    </div>
  );
}
