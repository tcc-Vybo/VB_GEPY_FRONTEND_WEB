import "./style.css";

<<<<<<< Updated upstream
function SidebarIcon({ name, icon }) {
  return (
    <div className="sidebar-icon">
      {icon}
=======
function SidebarIcon({ name, source }) {
  return (
    <div className="sidebar-icon">
      <img src={source} alt="" />
>>>>>>> Stashed changes
      <p>{name}</p>
    </div>
  );
}

export default SidebarIcon;
