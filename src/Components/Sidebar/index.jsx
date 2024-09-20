import { Link } from "react-router-dom";
import React from "react";
import "./style.css";
import {
  Contact,
  LogOut,
  Newspaper,
  NotebookPen,
  User,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar-style">
      <ul className="ul-sidebar">
        <li>
          <button className="button-sidebar">
            <Link to="/alunos">
              <User />
            </Link>
          </button>
          Alunos
        </li>
        <li>
          <button className="button-sidebar">
            <Link to="/turmas">
              <Users />
            </Link>
          </button>
          Turmas
        </li>
        <li>
          <button className="button-sidebar">
            <Link to="/funcionarios">
              <Contact />
            </Link>
          </button>
          Funcionários
        </li>
        <li>
          <button className="button-sidebar">
            <Link to="/newsletter">
              <Newspaper />
            </Link>
          </button>
          Newsletter
        </li>
        <li>
          <button className="button-sidebar">
            <Link to="/Agenda">
              <NotebookPen />
            </Link>
          </button>
          Agenda
        </li>
        <li>
          <button className="button-sidebar">
            <Link to="/login">
              <LogOut />
            </Link>
          </button>
          LogOff
        </li>
      </ul>
    </div>
  );
}
