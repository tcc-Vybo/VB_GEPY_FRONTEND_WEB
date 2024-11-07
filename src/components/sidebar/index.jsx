import {
  BriefcaseBusiness,
  House,
  LockKeyhole,
  LogOut,
  Newspaper,
  NotebookTabs,
  User,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Chevron from '../../assets/chevron-right.svg';
import ProfilePictureUploader from '../profile-image';
import './style.css';

export default function Sidebar() {
  const [alunosOpen, setAlunosOpen] = useState(false);
  const [funcionariosOpen, setFuncionariosOpen] = useState(false);
  const [turmasOpen, setTurmasOpen] = useState(false);
  //criar 3 estates para decidir se é active

  const handleAlunosClick = () => {
    if (turmasOpen) {
      setTurmasOpen(alunosOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(alunosOpen);
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
    setFuncionariosOpen(!funcionariosOpen);
  };

  const handleTurmasClick = () => {
    if (alunosOpen) {
      setAlunosOpen(turmasOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(turmasOpen);
    }
    setTurmasOpen(!turmasOpen);
  };

  const closeAll = () => {
    setAlunosOpen(false);
    setFuncionariosOpen(false);
    setTurmasOpen(false);
  };

  return (
    <div className="sidebar-parent">
      <div className="logged-user">
        <ProfilePictureUploader />
        <p>Diretora Xaxa</p>
      </div>
      <div className="sidebar-expand">
        <div className="sidebar-item">
          <NavLink
            to="/"
            className="sidebar-title"
          >
            <House
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Início</p>
          </NavLink>
        </div>
        <div className="sidebar-item">
          <div
            className={
              alunosOpen ? 'sidebar-title opened active' : 'sidebar-title'
            }
            onClick={handleAlunosClick}
          >
            <User
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Alunos</p>
            <img
              className="toggle-btn"
              src={Chevron}
              alt=""
            />
          </div>
          <div className={alunosOpen ? 'sub-area opened' : 'sub-area'}>
            <div>
              <NavLink
                to="/cadastro-alunos"
                className="sidebar-item-sub"
              >
                <p>Cadastro</p>
              </NavLink>
              <NavLink
                to="/busca-alunos"
                className="sidebar-item-sub"
              >
                <p>Busca</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <div
            className={
              funcionariosOpen ? 'sidebar-title opened active' : 'sidebar-title'
            }
            onClick={handleFuncionariosClick}
          >
            <BriefcaseBusiness
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Funcionários</p>
            <img
              className="toggle-btn"
              src={Chevron}
              alt=""
            />
          </div>
          <div className={funcionariosOpen ? 'sub-area opened' : 'sub-area'}>
            <div>
              <NavLink
                to="/cadastro-funcionarios"
                className="sidebar-item-sub"
              >
                <p>Cadastro</p>
              </NavLink>
              <NavLink
                to="/busca-funcionarios"
                className="sidebar-item-sub"
              >
                <p>Busca</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <div
            className={
              turmasOpen ? 'sidebar-title opened active' : 'sidebar-title'
            }
            onClick={handleTurmasClick}
          >
            <Users
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Turmas</p>
            <img
              className="toggle-btn"
              src={Chevron}
              alt=""
            />
          </div>
          <div className={turmasOpen ? 'sub-area opened' : 'sub-area'}>
            <div>
              <NavLink
                to="/cadastro-turmas"
                className="sidebar-item-sub"
              >
                <p>Cadastro</p>
              </NavLink>
              <NavLink
                to="/busca-turmas"
                className="sidebar-item-sub"
              >
                <p>Busca</p>
              </NavLink>
              <NavLink
                to="/boletim"
                className="sidebar-item-sub"
              >
                <p>Boletim</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <NavLink
            to="/recados"
            className="sidebar-title"
            onClick={closeAll}
          >
            <NotebookTabs
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Recados</p>
          </NavLink>
        </div>
        <div className="sidebar-item">
          <NavLink
            to="/newsletter"
            className="sidebar-title"
            onClick={closeAll}
          >
            <Newspaper
              size={20}
              color="#6700B3"
              strokeWidth={2}
            />
            <p>Newsletter</p>
          </NavLink>
        </div>
      </div>
      <div className="sidebar-buttons">
        <NavLink
          to="/login"
          className="link-login"
        >
          <LogOut
            size={20}
            color="#6700B3"
            strokeWidth={2}
          />
          <button className="button-logout-sidebar">Sair</button>
        </NavLink>
        <NavLink
          to="/"
          className="link-login"
        >
          <LockKeyhole
            size={20}
            color="#6700B3"
            strokeWidth={2}
          />
          <button className="button-changepassword-sidebar">Mudar senha</button>
        </NavLink>
      </div>
    </div>
  );
}
