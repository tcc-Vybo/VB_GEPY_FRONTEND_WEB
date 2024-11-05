import BoletimLinha from './boletim-line';
import './style.css';

export default function Boletim() {
  const alunoTeste = [
    {
      id: 1,
      aluno: {
        id: 1,
        nomeCompleto: 'TESTE ALUNO',
        dataNascimento: '24/02/2012',
        cidadeNascimento: 'SÃO PAULO',
        ufNascimento: 'SP',
        nacionalidade: 'BRASILEIRO',
        genero: 'Masculino',
        corRaca: 'Preto',
        necessidades: 'TESTE NECESSIDADE',
        cep: '09384783',
        endereco: 'RUA',
        numeroEndereco: 100,
        complemento: 'COMPLEMENTO',
        bairro: 'BAIRRO',
        municipio: 'SÃO PAULO',
        uf: 'Pai',
        numeroRegistro: '637289880',
        cpf: '12345678910',
        dataEmissao: '24/02/2012',
        orgaoExpedidor: 'SSP',
        emailAluno: null,
        telefoneAluno: '11987654321',
        nomeResponsavel: 'TESTE RESPONSÁVEL',
        cpfResponsavel: '12345678900',
        relacao: 'Pai',
        telefoneResponsavel: '11984739299',
        emailResponsavel: 'TESTE.RESPONSÁVEL@TESTE.COM',
      },
      disciplina: {
        id: 1,
        nome: 'PORTUGUES',
        descricao: 'aaaaaaaa',
      },
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
    {
      id: 2,
      aluno: {
        id: 2,
        nomeCompleto: 'TESTE ALUNO 2',
        dataNascimento: '24/02/2012',
        cidadeNascimento: 'SÃO PAULO',
        ufNascimento: 'SP',
        nacionalidade: 'BRASILEIRO',
        genero: 'Masculino',
        corRaca: 'Preto',
        necessidades: 'TESTE NECESSIDADE',
        cep: '09384783',
        endereco: 'RUA',
        numeroEndereco: 100,
        complemento: 'COMPLEMENTO',
        bairro: 'BAIRRO',
        municipio: 'SÃO PAULO',
        uf: 'Pai',
        numeroRegistro: '637289880',
        cpf: '12345678910',
        dataEmissao: '24/02/2012',
        orgaoExpedidor: 'SSP',
        emailAluno: null,
        telefoneAluno: '11987654321',
        nomeResponsavel: 'TESTE RESPONSÁVEL',
        cpfResponsavel: '12345678900',
        relacao: 'Pai',
        telefoneResponsavel: '11984739299',
        emailResponsavel: 'TESTE.RESPONSÁVEL@TESTE.COM',
      },
      disciplina: {
        id: 1,
        nome: 'PORTUGUES',
        descricao: 'aaaaaaaa',
      },
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
        {/* {alunoTeste.map(aluno)=>{
        BoletimLinha
       }} */}
      </div>
    </div>
  );
}
