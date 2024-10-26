import './style.css';
import Logo from '../../assets/logged-icon.png';
import Chevron from '../../assets/chevron-right.svg';
import { useState } from 'react';

export default function Sidebar() {
  const [alunosOpen, setAlunosOpen] = useState(false);
  const [funcionariosOpen, setFuncionariosOpen] = useState(false);
  const [turmasOpen, setTurmasOpen] = useState(false);

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

  return (
    <div className='sidebar'>
      <div>
        <div className='logged-user'>
          <img className='user-logo-icon' src={Logo} alt='' />
          <p>Diretora Xaxa</p>
        </div>
        <div className='sidebar-navigation'>
          <div className='sidebar-item'>
            <div className='sidebar-title'>
              <img src='' alt='' />
              <p>Início</p>
            </div>
          </div>
          <div className='sidebar-item'>
            <div
              className={alunosOpen ? 'sidebar-title opened' : 'sidebar-title'}
            >
              <img src='' alt='' />
              <p>Alunos</p>
              <img
                className='toggle-btn'
                src={Chevron}
                alt=''
                onClick={handleAlunosClick}
                on
              />
            </div>
            <div className={alunosOpen ? 'sub-area opened' : 'sub-area'}>
              <div>
                <div className='sidebar-item-sub'>
                  <p>Cadastro</p>
                </div>
                <div className='sidebar-item-sub'>
                  <p>Busca</p>
                </div>
              </div>
            </div>
          </div>
          <div className='sidebar-item'>
            <div
              className={
                funcionariosOpen ? 'sidebar-title opened' : 'sidebar-title'
              }
            >
              <img src='' alt='' />
              <p>Funcionários</p>
              <img
                className='toggle-btn'
                src={Chevron}
                alt=''
                onClick={handleFuncionariosClick}
              />
            </div>
            <div className={funcionariosOpen ? 'sub-area opened' : 'sub-area'}>
              <div>
                <div className='sidebar-item-sub'>
                  <p>Cadastro</p>
                </div>
                <div className='sidebar-item-sub'>
                  <p>Busca</p>
                </div>
              </div>
            </div>
          </div>
          <div className='sidebar-item'>
            <div
              className={turmasOpen ? 'sidebar-title opened' : 'sidebar-title'}
            >
              <img src='' alt='' />
              <p>Turmas</p>
              <img
                className='toggle-btn'
                src={Chevron}
                alt=''
                onClick={handleTurmasClick}
              />
            </div>
            <div className={turmasOpen ? 'sub-area opened' : 'sub-area'}>
              <div>
                <div className='sidebar-item-sub'>
                  <p>Cadastro</p>
                </div>
                <div className='sidebar-item-sub'>
                  <p>Busca</p>
                </div>
                <div className='sidebar-item-sub'>
                  <p>Recados</p>
                </div>
                <div className='sidebar-item-sub'>
                  <p>Boletim</p>
                </div>
              </div>
            </div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>
              <img src='' alt='' />
              <p>Agenda</p>
            </div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>
              <img src='' alt='' />
              <p>Newsletter</p>
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-buttons'>
        <button>Sair</button>
        <button>Mudar senha</button>
      </div>
    </div>
  );
}
