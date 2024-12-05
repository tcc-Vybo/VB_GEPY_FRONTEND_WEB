import React, { useState } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";
import ErrorPage from "./pages/error/index.jsx";
import BuscaAlunos from "./pages/alunos/busca-alunos/index.jsx";
import CadastroAlunos from "./pages/alunos/cadastro-alunos/index.jsx";
import BuscaFuncionarios from "./pages/funcionarios/busca-funcionarios/index.jsx";
import CadastroFuncionarios from "./pages/funcionarios/cadastro-de-funcionarios/index.jsx";
import CadastroTurmas from "./pages/turmas/cadastro-turmas/index.jsx";
import BuscaTurmas from "./pages/turmas/busca-turma/index.jsx";
import Boletim from "./pages/turmas/boletim/index.jsx";
import Recados from "./pages/recados/index.jsx";
import Newsletter from "./pages/newsletter/index.jsx";
import AlunoPorTurma from "./pages/alunos/alunosPorTurma/index.jsx";
import ProfessorPorDisciplina from "./pages/funcionarios/professorPorDisciplina/index.jsx";
import Disciplina from "./pages/mais-modulos/disciplina/index.jsx"
import Cargo from "./pages/mais-modulos/cargo/index.jsx"
import TipoRecado from "./pages/mais-modulos/tipoRecado/index.jsx"
import PerfilPorServidor from "./pages/mais-modulos/perfil/index.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/vybo/gepy",
      element: <Home />,
      children: [
        { path: "busca-alunos", element: <BuscaAlunos /> },
        { path: "cadastro-alunos", element: <CadastroAlunos /> },
        { path: "alunos-turma", element: <AlunoPorTurma /> },
        { path: "busca-funcionarios", element: <BuscaFuncionarios /> },
        { path: "cadastro-funcionarios", element: <CadastroFuncionarios /> },
        { path: "professor-disciplina", element: <ProfessorPorDisciplina /> },
        { path: "cadastro-turmas", element: <CadastroTurmas /> },
        { path: "busca-turmas", element: <BuscaTurmas /> },
        { path: "disciplina", element: <Disciplina /> },
        { path: "cargo", element: <Cargo /> },
        { path: "tipo-recado", element: <TipoRecado /> },
        { path: "perfil-servidor", element: <PerfilPorServidor /> },
        { path: "boletim", element: <Boletim /> },
        { path: "recados", element: <Recados /> },
        { path: "newsletter", element: <Newsletter /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
