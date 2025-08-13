import React, { useState } from "react";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-page-container">
      <div className="auth-blur-container">
        <div className="login-content">
          <div className="login-header">
            <div className="logo-container">
              <h1 className="logo-text">DepEd Biñan DTRACS</h1>
              <div className="beta-tag">βeta</div>
            </div>
        <p className="login-subtitle">Please login or sign up to start your session.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group">
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group password-input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className={isHovering ? "icon-hover" : ""} />
                ) : (
                  <FaEye className={isHovering ? "icon-hover" : ""} />
                )}
              </button>
            </div>
            <div className="forgot-password">
              <a href="#forgot" className="forgot-link">I forgot my password</a>
            </div>
          </div>

          <button 
            type="submit" 
            className="login-button"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FiLogIn className="login-icon" />
            Log in
          </button>
          </form>

          <div className="register-section">
            <p className="register-text">
              Need an account? <a href="#register" className="register-link">Register here</a>
            </p>
          </div>

          <div className="terms-notice">
            <p>
            By using this service, you understand and agree to the DepEd Online Services{" "}
              <a href="#terms" className="terms-link">Terms of Use</a> and{" "}
              <a href="#privacy" className="terms-link">Privacy Statement</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo-container">
          <h1 className="logo-text">DepEd Biñan DTRACS</h1>
          <div className="beta-tag">βeta</div>
        </div>
        <p className="login-subtitle">Please login or sign up to start your session.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group">
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group password-input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FaEyeSlash className={isHovering ? "icon-hover" : ""} />
              ) : (
                <FaEye className={isHovering ? "icon-hover" : ""} />
              )}
            </button>
          </div>
          <div className="forgot-password">
            <a href="#forgot" className="forgot-link">I forgot my password</a>
          </div>
        </div>

        <button 
          type="submit" 
          className="login-button"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <FiLogIn className="login-icon" />
          Log in
        </button>
      </form>

      <div className="register-section">
        <p className="register-text">
          Need an account? <a href="#register" className="register-link">Register here</a>
        </p>
      </div>

      <div className="terms-notice">
        <p>
          By using this service, you understand and agree to the DepEd Online Services{" "}
          <a href="#terms" className="terms-link">Terms of Use</a> and{" "}
          <a href="#privacy" className="terms-link">Privacy Statement</a>
        </p>
      </div>
    </div>
  );
};
*/

export default Login;