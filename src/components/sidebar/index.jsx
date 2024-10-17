import './style.css';
import Logo from '../../assets/logged-icon.png';
import SidebarItem from './sidebar-icons';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
        <div className='logged-user'>
          <img
            className='user-logo-icon'
            src={Logo}
            alt=''
          />
          <p>Diretora Xaxa</p>
        </div>
        <div className='sidebar-navigation'>
          <SidebarItem name='Início' />
          <SidebarItem name='Cadastros' />
          <SidebarItem name='Turmas' />
          <SidebarItem name='Agenda' />
          <SidebarItem name='Newsletter' />
        </div>
      </div>
      <div className='sidebar-buttons'>
        <button>Sair</button>
        <button>Mudar senha</button>
      </div>
    </div>
  );
}
