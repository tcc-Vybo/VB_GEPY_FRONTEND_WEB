import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './pages/home/index.jsx';
import Login from './pages/login/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
  
);
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);