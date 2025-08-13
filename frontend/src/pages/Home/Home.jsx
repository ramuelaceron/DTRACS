import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import background from "../../assets/images/Start-Up.png";
import arrowDown from "../../assets/images/vector.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Fixed Background Image */}
      <div className="background-image">
        <img src={background} alt="DepEd Biñan City Building" />
      </div>

      <div className="blue-overlay">
        <div className="content-container">
          <div className="greeting-section">
            <h1 className="greeting-text">Magandang Buhay!</h1>
            <p className="welcome-text">
              Welcome to DepEd Biñan Record Monitoring System
            </p>
          </div>

          <div className="instruction-section">
            <p className="instruction-text">
              Please click or tap your destination.
            </p>
            <img 
              src={arrowDown} 
              alt="" 
              className="arrow-icon" 
              aria-hidden="true"
            />
          </div>

          <div className="button-group">
            <button 
              className="btn-school"
              onClick={() => navigate("/login")}
              aria-label="School login"
            >
              School
            </button>
            <button 
              className="btn-office"
              onClick={() => navigate("/login")}
              aria-label="Office login"
            >
              Office
            </button>
          </div>

          <div className="terms-disclaimer">
            <p>
              By using this service, you understand and agree to the DepEd
              Online Services{" "}
              <a href="#terms" className="link">Terms of Use</a> and{" "}
              <a href="#privacy" className="link">Privacy Statement</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;