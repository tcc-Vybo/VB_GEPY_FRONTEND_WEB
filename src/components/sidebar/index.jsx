import './style.css';
import Logo from '../../assets/logged-icon.png';
import SidebarIcon from './sidebar-icons';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="logged-user">
          <img
            className="user-logo-icon"
            src={Logo}
            alt=""
          />
          <p>Diretora Xaxa</p>
        </div>
        <div className="sidebar-navigation">
          <SidebarIcon name="Início" />
          <SidebarIcon name="Cadastros" />
          <SidebarIcon name="Turmas" />
          <SidebarIcon name="Agenda" />
          <SidebarIcon name="Newsletter" />
        </div>
      </div>
      <div className="sidebar-buttons">
        <button>Sair</button>
        <button>Mudar senha</button>
      </div>
    </div>
  );
}
