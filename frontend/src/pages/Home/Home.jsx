import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import vector from "../../assets/images/vector.png";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <main className="home-container">
      <div className="content-wrapper">
        <div className="greeting-section">
          <h1 className="greeting-text">Magandang Buhay!</h1>
          <p className="welcome-text">
            Welcome to DepEd Biñan Record Monitoring System
          </p>
        </div>

        <div className="instruction-section">
          <img 
            className="pointer-icon" 
            src={vector} 
            alt="Pointer icon" 
            aria-hidden="true"
          />
          <p className="instruction-text">
            Please click or tap your destination.
          </p>
        </div>

        <div className="button-group">
          <button 
            className="btn-school" 
            onClick={handleNavigation}
            aria-label="Navigate to School login"
          >
            School
          </button>
          <button 
            className="btn-office" 
            onClick={handleNavigation}
            aria-label="Navigate to Office login"
          >
            Office
          </button>
        </div>

        <p className="privacy-notice">
          <span className="privacy-text">
            By using this service, you understand and agree to the DepEd
            Online Services{" "}
            <a href="#" className="link">Terms of Use</a> and{" "}
            <a href="#" className="link">Privacy Statement</a>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Home;