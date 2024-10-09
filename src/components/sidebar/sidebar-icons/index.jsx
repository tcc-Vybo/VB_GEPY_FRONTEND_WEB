import "./style.css";

function SidebarIcon({ name, icon }) {
  return (
    <div className="sidebar-icon">
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default SidebarIcon;
