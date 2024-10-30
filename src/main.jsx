import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/home/index.jsx';
import Login from './pages/login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
