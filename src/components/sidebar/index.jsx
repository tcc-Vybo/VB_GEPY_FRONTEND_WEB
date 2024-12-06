import {
  BriefcaseBusiness,
  House,
  LockKeyhole,
  LogOut,
  Newspaper,
  NotebookTabs,
  User,
  Users,
  Package,
} from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Chevron from "../../assets/chevron-right.svg";
import "./style.css";
import { UserContext } from "../../contexts/UserContext";
import LogoGepy from "../../assets/Logo.png";

export default function Sidebar() {
  const [alunosOpen, setAlunosOpen] = useState(false);
  const [funcionariosOpen, setFuncionariosOpen] = useState(false);
  const [turmasOpen, setTurmasOpen] = useState(false);
  const [maisModulosOpen, setMaisModulosOpen] = useState(false);

  const [inicioActive, setInicioActive] = useState(false);
  const [recadosActive, setRecadosActive] = useState(false);
  const [newsletterActive, setNewsletterActive] = useState(false);

  const { cargoId, nomeFuncionario } = useContext(UserContext);

  const handleOpen = () => {
    setRecadosActive(false);
    setNewsletterActive(false);
    setInicioActive(false);
  };

  const handleClose = () => {
    setAlunosOpen(false);
    setFuncionariosOpen(false);
    setTurmasOpen(false);
    setMaisModulosOpen(false);
  };

  const handleInicioClick = () => {
    handleClose();
    setRecadosActive(false);
    setNewsletterActive(false);
    setInicioActive(true);
  };

  const handleRecadosClick = () => {
    handleClose();
    setInicioActive(false);
    setNewsletterActive(false);
    setRecadosActive(true);
  };

  const handleNewsletterClick = () => {
    handleClose();
    setInicioActive(false);
    setRecadosActive(false);
    setNewsletterActive(true);
  };

  const handleAlunosClick = () => {
    if (turmasOpen) {
      setTurmasOpen(alunosOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(alunosOpen);
    }
    if (maisModulosOpen) {
      setMaisModulosOpen(alunosOpen);
    }

    setAlunosOpen(!alunosOpen);
  };

  const handleFuncionariosClick = () => {
    if (alunosOpen) {
      setAlunosOpen(funcionariosOpen);
    }
    if (turmasOpen) {
      setTurmasOpen(funcionariosOpen);
    }
    if (maisModulosOpen) {
      setMaisModulosOpen(funcionariosOpen);
    }
    setFuncionariosOpen(!funcionariosOpen);
  };

  const handleTurmasClick = () => {
    if (alunosOpen) {
      setAlunosOpen(turmasOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(turmasOpen);
    }
    if (maisModulosOpen) {
      setMaisModulosOpen(turmasOpen);
    }
    setTurmasOpen(!turmasOpen);
  };

  const handleMaisModulosClick = () => {
    if (alunosOpen) {
      setAlunosOpen(maisModulosOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(maisModulosOpen);
    }
    if (turmasOpen) {
      setTurmasOpen(maisModulosOpen);
    }
    setMaisModulosOpen(!maisModulosOpen);
  };

  const renderMaisModulos = () => {
    if (cargoId === 3) {
      return (
        <div className="sidebar-item" onClick={handleOpen}>
          <div
            className={
              maisModulosOpen ? "sidebar-title opened active" : "sidebar-title"
            }
            onClick={handleMaisModulosClick}
          >
            <Package size={20} color="#6700B3" strokeWidth={2} />
            <p>Mais Módulos</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={maisModulosOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <NavLink to="disciplina" className="sidebar-item-sub">
                <p>Disciplina</p>
              </NavLink>
              <NavLink to="cargo" className="sidebar-item-sub">
                <p>Cargo</p>
              </NavLink>
              <NavLink to="tipo-recado" className="sidebar-item-sub">
                <p>Tipo de Recado</p>
              </NavLink>
              <NavLink to="perfil-servidor" className="sidebar-item-sub">
                <p>Perfil Para Servidores</p>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderTurmas = () => {
    if (cargoId === 3 || cargoId === 1 ) {
      return (
        <div className="sidebar-item" onClick={handleOpen}>
          <div
            className={
              turmasOpen ? "sidebar-title opened active" : "sidebar-title"
            }
            onClick={handleTurmasClick}
          >
            <Users size={20} color="#6700B3" strokeWidth={2} />
            <p>Turmas</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={turmasOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <NavLink to="cadastro-turmas" className="sidebar-item-sub">
                <p>Cadastro</p>
              </NavLink>
              <NavLink to="busca-turmas" className="sidebar-item-sub">
                <p>Busca</p>
              </NavLink>
              <NavLink to="boletim" className="sidebar-item-sub">
                <p>Boletim</p>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderServidores = () => {
    if (cargoId === 3 || cargoId === 2) {
      return (
        <div className="sidebar-item" onClick={handleOpen}>
          <div
            className={
              funcionariosOpen ? "sidebar-title opened active" : "sidebar-title"
            }
            onClick={handleFuncionariosClick}
          >
            <BriefcaseBusiness size={20} color="#6700B3" strokeWidth={2} />
            <p>Servidores</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={funcionariosOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <NavLink to="cadastro-funcionarios" className="sidebar-item-sub">
                <p>Cadastro</p>
              </NavLink>
              <NavLink to="busca-funcionarios" className="sidebar-item-sub">
                <p>Lista de Servidores</p>
              </NavLink>
              <NavLink to="professor-disciplina" className="sidebar-item-sub">
                <p>Professores Por Disciplina</p>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderAlunos = () => {
    if (cargoId === 3 || cargoId === 2) {
      return (
        <div className="sidebar-item" onClick={handleOpen}>
          <div
            className={
              alunosOpen ? "sidebar-title opened active" : "sidebar-title"
            }
            onClick={handleAlunosClick}
          >
            <User size={20} color="#6700B3" strokeWidth={2} />
            <p>Alunos</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={alunosOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <NavLink to="cadastro-alunos" className="sidebar-item-sub">
                <p>Cadastro</p>
              </NavLink>
              <NavLink to="busca-alunos" className="sidebar-item-sub">
                <p>Lista de Alunos</p>
              </NavLink>
              <NavLink to="alunos-turma" className="sidebar-item-sub">
                <p>Alunos Por Turma</p>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderNewsletter = () => {
    if (cargoId === 3 || cargoId === 2) {
      return (
        <div className="sidebar-item">
          <NavLink
            to="newsletter"
            className={
              newsletterActive ? "sidebar-title active" : "sidebar-title"
            }
            onClick={handleNewsletterClick}
          >
            <Newspaper size={20} color="#6700B3" strokeWidth={2} />
            <p>Newsletter</p>
          </NavLink>
        </div>
      );
    }
    return null;
  };

  

  return (
    <div className="sidebar-parent">
      <div className="logged-user">
      <img className="logo-size" src={LogoGepy} />
        <p>{nomeFuncionario}</p>
      </div>
      <div className="sidebar-expand">
        <div className="sidebar-item">
          <NavLink
            to="/vybo/gepy"
            className={inicioActive ? "sidebar-title active" : "sidebar-title"}
            onClick={handleInicioClick}
          >
            <House size={20} color="#6700B3" strokeWidth={2} />
            <p>Início</p>
          </NavLink>
        </div>
        
        {renderAlunos()}
        {renderTurmas()}
        {renderServidores()}
        {renderMaisModulos()}
        
        <div className="sidebar-item">
          <NavLink
            to="recados"
            className={recadosActive ? "sidebar-title active" : "sidebar-title"}
            onClick={handleRecadosClick}
          >
            <NotebookTabs size={20} color="#6700B3" strokeWidth={2} />
            <p>Recados</p>
          </NavLink>
        </div>

        {renderNewsletter()}
        
      </div>
      <div className="sidebar-buttons">
        <NavLink to="/" className="link-login">
          <LogOut size={20} color="#6700B3" strokeWidth={2} />
          <button className="button-logout-sidebar">Sair</button>
        </NavLink>
      </div>
    </div>
  );
}
