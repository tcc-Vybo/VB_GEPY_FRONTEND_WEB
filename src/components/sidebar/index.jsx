import "./style.css";
import Logo from "../../assets/logged-icon.png";
import SidebarIcon from "./sidebar-icons";
import {
  Contact,
  LogOut,
  Newspaper,
  NotebookPen,
  User,
  Users,
  Home,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="logged-user">
          <img className="user-logo-icon" src={Logo} alt="" />
          <p>Diretora Xaxa</p>
        </div>
        <div className="sidebar-navigation">
          <SidebarIcon name="Início" icon={<Home />} />
          <SidebarIcon name="Cadastros" />
          <SidebarIcon name="Turmas" />
          <SidebarIcon name="Agenda" />
          <SidebarIcon name="Newsletter" />
        </div>
      </div>
      <div className="sidebar-footer-buttons">
        <button className="b-sair">Sair</button>
        <button className="b-mudarSenha">Mudar senha</button>
      </div>
    </div>
  );
}

export default Sidebar;
