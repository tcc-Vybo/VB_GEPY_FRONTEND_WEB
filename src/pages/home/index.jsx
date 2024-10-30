import Boletim from "../../components/turmas/boletim/index";
import BuscaAluno from "../../components/alunos/busca-alunos";
import BuscaFuncionario from "../../components/funcionarios/busca-funcionarios/";
import BuscaTurma from "../../components/turmas/busca-turma";
import CadastroAlunos from "../../components/alunos/cadastro-alunos";
import CadastroFuncionarios from "../../components/funcionarios/cadastro-de-funcionarios";
import Sidebar from "../../components/sidebar";
import "./style.css";

export default function Home() {
  return (
    <div className="main-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className='main-content'>
        <div className='content-container'>
          <CadastroFuncionarios />
        </div>
      </div>
    </div>
  );
}
