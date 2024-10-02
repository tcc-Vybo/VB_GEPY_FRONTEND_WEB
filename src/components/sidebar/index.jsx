import './style.css';
import Logo from '../../assets/logged-icon.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logged-user">
        <img
          className="user-logo-icon"
          src={Logo}
          alt=""
        />
        <p>Diretora Xaxa</p>
      </div>
      <div className="sidebar-navigation"></div>
    </div>
  );
}

export default Sidebar;
