import React from "react";
import "./Home.css";
import vector from "../../assets/images/vector.png";

export const StartUp = () => {

    const handleSchoolClick = () => {
    console.log("School button clicked");
    // Navigate or perform action here
    };

    const handleOfficeClick = () => {
      console.log("Office button clicked");
      // Navigate or perform action here
    };

  return (
    <div className="start-up">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">

          <div className="text-wrapper">
            <div className="h">
              <div className="greetings">
                <div className="greeting-text">Magandang Buhay!</div>

                <p className="p">
                  Welcome to DepEd Biñan Record Monitoring System
                </p>
              </div>
            </div>
            <div className="instruction">
              <p className="instruction-text">
                Please click or tap your destination.
              </p>
              <img className="vector" alt="Vector" src={vector} />
            </div>

            <div className="button-container">
              <button className="office-school-button" onClick={handleSchoolClick}>
                School
              </button>
              <button className="focal-personnels" onClick={handleOfficeClick}>
                Office
              </button>
            </div>

            <p className="privacy">
              <span className="span">
                By using this service, you understand and agree to the DepEd
                Online Services{" "}
              </span>
              <span className="privacy-text">Terms of Use</span>
              <span className="span"> and </span>
              <span className="privacy-text">Privacy Statement</span>
            </p>
          </div>
             

        </div>
      </div>
    </div>
  );
};

export default StartUp;
