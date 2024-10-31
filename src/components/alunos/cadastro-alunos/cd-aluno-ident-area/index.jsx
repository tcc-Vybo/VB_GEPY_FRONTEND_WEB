import CadastroInput from '../../../cd-input/index';

export default function AlunosInputAreaIdentific({ open }) {
  return (
    <div className={open ? 'inputs-area expanded' : 'inputs-area'}>
      <div className='input-line'>
        <CadastroInput name={'Nome Completo'} />
        <CadastroInput name={'Data de Nascimento'} />
        <CadastroInput name={'Cidade de Nascimento'} />
        <CadastroInput name={'UF'} />
      </div>
      <div className='input-line'>
        <CadastroInput name={'Nacionalidade'} />
        <CadastroInput name={'Gênero'} />
        <CadastroInput name={'Cor/Raça'} />
        <CadastroInput name={'Necessidades'} />
        <CadastroInput name={'Turma'} />
      </div>
    </div>
  );
}
