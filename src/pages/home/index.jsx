import CadastroAlunoInput from '../../components/cadastro-aluno-input';
import Sidebar from '../../components/sidebar';
import './style.css';
import { useState } from 'react';

function Home() {
  const [indentificationVisisble, setIndentificationVisible] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIndentificationVisible(!indentificationVisisble);
  };

  return (
    <div className="main-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="content-container">
          <div
            className="action"
            onClick={handleClick}
          >
            <h1>Indentificação</h1>
            <p>S</p>
          </div>
          <div className="indentification-inputs">
            {indentificationVisisble && (
              <CadastroAlunoInput name={'Nome Completo'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
