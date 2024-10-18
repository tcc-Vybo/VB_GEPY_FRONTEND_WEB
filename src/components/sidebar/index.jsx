import './style.css';
import Logo from '../../assets/logged-icon.png';
import Chevron from '../../assets/chevron-right.svg';
import { useState } from 'react';

export default function Sidebar() {
  const [cadastroOpen, setCadastroOpen] = useState(false);
  const [turmasOpen, setTurmasOpen] = useState(false);

  const handleCadastroClick = () => {
    if (turmasOpen) {
      setTurmasOpen(cadastroOpen);
    }
    setCadastroOpen(!cadastroOpen);
  };

  const handleTurmasClick = () => {
    if (cadastroOpen) {
      setCadastroOpen(turmasOpen);
    }
    setTurmasOpen(!turmasOpen);
  };

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
          <div className="sidebar-item">
            <div className="sidebar-title">
              <img
                src=""
                alt=""
              />
              <p>Início</p>
            </div>
          </div>
          <div className="sidebar-item">
            <div
              className={
                cadastroOpen ? 'sidebar-title opened' : 'sidebar-title'
              }
            >
              <img
                src=""
                alt=""
              />
              <p>Cadastro</p>
              <img
                className="toggle-btn"
                src={Chevron}
                alt=""
                onClick={handleCadastroClick}
              />
            </div>
            {cadastroOpen && (
              <>
                <div className="sidebar-item-sub">
                  <p>Alunos</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Funcionários</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Professores</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Disciplina</p>
                </div>
              </>
            )}
          </div>
          <div className="sidebar-item">
            <div
              className={turmasOpen ? 'sidebar-title opened' : 'sidebar-title'}
            >
              <img
                src=""
                alt=""
              />
              <p>Turmas</p>
              <img
                className="toggle-btn"
                src={Chevron}
                alt=""
                onClick={handleTurmasClick}
              />
            </div>
            {turmasOpen && (
              <>
                <div className="sidebar-item-sub">
                  <p>Cadastrar nova</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Boletim</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Recados</p>
                </div>
                <div className="sidebar-item-sub">
                  <p>Atividades</p>
                </div>
              </>
            )}
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">
              <img
                src=""
                alt=""
              />
              <p>Agenda</p>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">
              <img
                src=""
                alt=""
              />
              <p>Newsletter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-buttons">
        <button>Sair</button>
        <button>Mudar senha</button>
      </div>
    </div>
  );
}
