import Sidebar from '../../components/sidebar';
import './style.css';
import "../../components/footer/index";
import Footer from '../../components/footer/index';

function Home() {
  return (
    <div className="main-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="content-container"></div>
        
      </div>
    </div>
  );
};

export default Home;

