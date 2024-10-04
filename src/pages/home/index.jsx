import CadastroAlunos from '../../components/cadastro-alunos';
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
          <CadastroAlunos />
        </div>
      </div>
    </div>
  );
}
