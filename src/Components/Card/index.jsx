import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Contact, Newspaper, NotebookPen, User, Users } from "lucide-react";
// import Alunos from "../Alunos";
// import Turmas from "../Turmas";
// import Funcionarios from "../Funcionarios";
// import Agenda from "../Agenda";
// import Newsletter from "../Newsletter";

export default function InitialButtons() {
  return (
    <div className="main-form">
      <div className="icons-top">
        <div className="button-pattern">
          <Link to="/alunos">
            <button className="button-home">
              <User className="button-icon-home" />
            </button>
          </Link>
          Alunos
        </div>
        <div className="button-pattern">
          <Link to="/turmas">
            <button className="button-home">
              <Users className="button-icon-home" />
            </button>
          </Link>
          Turmas
        </div>
        <div className="button-pattern">
          <Link to="/funcionarios">
            <button className="button-home">
              <Contact className="button-icon-home" />
            </button>
          </Link>
          Funcionários
        </div>
      </div>

      <div className="icons-down">
        <div className="button-pattern">
          <Link to="/agenda">
            <button className="button-home">
              <NotebookPen className="button-icon-home" />
            </button>
          </Link>
          Agenda
        </div>

        <div className="button-pattern">
          <Link to="/newsletter">
            <button className="button-home">
              <Newspaper className="button-icon-home" />
            </button>
          </Link>
          Newsletter
        </div>
      </div>
    </div>
  );
}
