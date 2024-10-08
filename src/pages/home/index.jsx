import BuscaAluno from '../../components/busca-alunos';
import CadastroAlunos from '../../components/cadastro-alunos';
import CadastroFuncionarios from '../../components/cadastro-de-funcionarios';
import Sidebar from '../../components/sidebar';
import './style.css';

export default function Home() {
  return (
    <div className="main-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="content-container">
          <BuscaAluno />
        </div>
      </div>
    </div>
  );
}
