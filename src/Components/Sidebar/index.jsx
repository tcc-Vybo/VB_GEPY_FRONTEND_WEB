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
            <User />
          </button>
          Alunos
        </li>
        <li>
          <button className="button-sidebar">
            <Users />
          </button>
          Turmas
        </li>
        <li>
          <button className="button-sidebar">
            <Contact />
          </button>
          Funcionários
        </li>
        <li>
          <button className="button-sidebar">
            <Newspaper />
          </button>
          Newsletter
        </li>
        <li>
          <button className="button-sidebar">
            <NotebookPen />
          </button>
          Agenda
        </li>
        <li>
          <button className="button-sidebar">
            <LogOut />
          </button>
          LogOff
        </li>
      </ul>
    </div>
  );
}
