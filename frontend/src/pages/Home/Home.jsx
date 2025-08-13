import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import vector from "../../assets/images/vector.png";
// import logo from "../../assets/images/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleSchoolNavigation = () => {
    navigate("/login/school"); // Navigates to school login
  };

  const handleOfficeNavigation = () => {
    navigate("/login/office"); // Navigates to office login
  };

  return (
    <main className="home-container">
      <div className="content-wrapper">
        <div className="greeting-section">
          {/* <img 
            className="logo-image" 
            src={logo} 
            alt="logo" 
            aria-hidden="true"
          /> */}
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
            onClick={handleSchoolNavigation}  // Updated handler
            aria-label="Navigate to School login"
          >
            School
          </button>
          <button 
            className="btn-office" 
            onClick={handleOfficeNavigation}  // Updated handler
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