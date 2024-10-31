import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";
import ErrorPage from "./pages/error/index.jsx";
import BuscaAlunos from "./components/alunos/busca-alunos/index.jsx";
import CadastroAlunos from "./components/alunos/cadastro-alunos/index.jsx";
import BuscaFuncionarios from "./components/funcionarios/busca-funcionarios/index.jsx";
import CadastroFuncionarios from "./components/funcionarios/cadastro-de-funcionarios/index.jsx";
import CadastroTurmas from "./components/turmas/cadastro-turmas/index.jsx";
import BuscaTurmas from "./components/turmas/busca-turma/index.jsx";
import Recados from "./components/turmas/recados/index.jsx";
import Boletim from "./components/turmas/boletim/index.jsx";
import Agenda from "./components/agenda/index.jsx";
import Newsletter from "./components/newsletter/index.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/busca-alunos",
        element: <BuscaAlunos />,
      },
      {
        path: "/cadastro-alunos",
        element: <CadastroAlunos />,
      },
      {
        path: "/busca-funcionarios",
        element: <BuscaFuncionarios />,
      },
      {
        path: "/cadastro-funcionarios",
        element: <CadastroFuncionarios />,
      },
      {
        path: "/cadastro-turmas",
        element: <CadastroTurmas />,
      },
      {
        path: "/busca-turmas",
        element: <BuscaTurmas />,
      },
      {
        path: "/recados",
        element: <Recados />,
      },
      {
        path: "/boletim",
        element: <Boletim />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
