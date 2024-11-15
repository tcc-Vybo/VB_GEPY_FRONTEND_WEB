import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./style.css";

export default function Home() {
  return (
    <div className="main-page">
      <div className="children-div">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-content">
          <div className="content-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
