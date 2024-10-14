import "./style.css";
import Logo from "../../assets/logged-icon.png";
import SidebarIcon from "./sidebar-icons";
import { Link } from "react-router-dom";
import {
  Contact,
  LogOut,
  Newspaper,
  NotebookPen,
  User,
  Users,
  Home,
  Lock,
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
          <SidebarIcon name="Cadastro" icon={<User />} />
          <SidebarIcon name="Turmas" icon={<Users />} />
          <SidebarIcon name="Agenda" icon={<NotebookPen />} />
          <SidebarIcon name="Newsletter" icon={<Newspaper />} />
        </div>
      </div>
      <div className="sidebar-footer-buttons">
        <button className="b-sair">
          <span className="espaco">
            <LogOut /> Sair
          </span>
        </button>
        <button className="b-alterarSenha">
          {" "}
          <Lock /> Alterar Senha
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
