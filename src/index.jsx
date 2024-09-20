import React from "react";
import ReactDOM from "react-dom/client";
import Agenda from "./Components/Agenda";
import Alunos from "./Components/Alunos";
import AlterarAlunos from "./Components/Alunos/components-alunos/alterar";
import CadastrarAlunos from "./Components/Alunos/components-alunos/cadastrar";
import DeletarAlunos from "./Components/Alunos/components-alunos/deletar";
import Funcionarios from "./Components/Funcionarios";
import Newsletter from "./Components/Newsletter";
import Turmas from "./Components/Turmas";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BuscarAlunos from "./Components/Alunos/components-alunos/buscar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/alunos",
        element: <Alunos />,
        children: [
          {
            path: "/alunos/cadastrar",
            element: <CadastrarAlunos />,
          },
          {
            path: "/alunos/buscar",
            element: <BuscarAlunos />,
          },
          {
            path: "/alunos/alterar",
            element: <AlterarAlunos />,
          },
          {
            path: "/alunos/deletar",
            element: <DeletarAlunos />,
          },
        ],
      },
      {
        path: "/turmas",
        element: <Turmas />,
      },
      {
        path: "/funcionarios",
        element: <Funcionarios />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/Agenda",
        element: <Agenda />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
