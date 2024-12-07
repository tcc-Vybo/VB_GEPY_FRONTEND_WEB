import { Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import LogoGepy from "../../../assets/Logo.png";

export default function Dashboard() {
  const location = useLocation();

  const isRootPath = location.pathname === "/vybo/gepy";

  return (
    <div className="dashboard-container">
      {isRootPath && (
        <div className="dashboard-banner">
          <img src={LogoGepy} alt="Bem-vindo" className="banner-image" />
          <h1 className="dashboard-title">Bem-vindo ao Sistema!</h1>
        </div>
      )}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
