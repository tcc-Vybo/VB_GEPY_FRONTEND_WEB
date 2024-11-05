export default function BoletimLinha({
  disciplina,
  notaBimUm,
  faltasBimUm,
  notaBimDois,
  faltasBimDois,
  notaBimTres,
  faltasBimTres,
  notaBimQuatro,
  faltasBimQuatro,
  situacao,
}) {
  return (
    <div className='boletim-linha'>
      <div className='disciplina'>
        <p>{disciplina}</p>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span>{notaBimUm}</span>
        </div>
        <div className='falta'>
          <span>{faltasBimUm}</span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span>{notaBimDois}</span>
        </div>
        <div className='falta'>
          <span>{faltasBimDois}</span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span>{notaBimTres}</span>
        </div>
        <div className='falta'>
          <span>{faltasBimTres}</span>
        </div>
      </div>
      <div className='notas-e-faltas'>
        <div className='nota'>
          <span>{notaBimQuatro}</span>
        </div>
        <div className='falta'>
          <span>{faltasBimQuatro}</span>
        </div>
      </div>
      <div className='situacao'>
        <p>{situacao}</p>
      </div>
    </div>
  );
}
