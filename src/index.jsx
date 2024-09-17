import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./Pages/Login";
import Home from "./Pages/Home";
import Alunos from "./Components/Alunos";
import Turmas from "./Components/Turmas";
import Funcionarios from "./Components/Funcionarios";
import Newsletter from "./Components/Newsletter";
import Agenda from "./Components/Agenda";
import ErrorPage from "./Pages/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialButtons from "./Components/Card";

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
        path: "/tela-inicial",
        element: <InitialButtons />,
      },
      {
        path: "/alunos",
        element: <Alunos />,
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
