import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSchool.css";

const RegisterSchool = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    contactNumber: "",
    school: "",
    position: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log("Form submitted:", formData);
  };

  const handleLoginClick = () => {
    navigate("/login/school");
  };

  return (
   <div className="register-container">
        <div className="header-section">
          <div className="logo-group">
            <h1 className="logo-text">DepEd Biñan DTRACS</h1>
            <div className="beta-tag">βeta</div>
          </div>
          <p className="instruction-text">
            Please fill up information below to register.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Name Fields */}
          <div className="form-group name-fields">
            <label className="form-label">Name</label>
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="name-input"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="name-input"
                required
              />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Middle name"
                className="name-input"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label className="form-label">Contact Number</label>
            <div className="phone-input-container">
              <span className="country-code">+63</span>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="phone-input"
                required
              />
            </div>
          </div>

          {/* School */}
          <div className="form-group">
            <label className="form-label">School</label>
            <select
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select your school</option>
              <option value="school1">Biñan Elementary School</option>
              <option value="school2">Biñan High School</option>
              {/* Add more schools as needed */}
            </select>
          </div>

          {/* Position */}
          <div className="form-group">
            <label className="form-label">Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select your position</option>
              <option value="teacher">Teacher</option>
              <option value="principal">Principal</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <div className="login-prompt">
          Already have an account?{" "}
          <span className="login-link" onClick={handleLoginClick}>
            Log in
          </span>
        </div>

        <p className="privacy-notice">
          By using this service, you understand and agree to the DepEd Online
          Services{" "}
          <a href="#terms" className="privacy-link">Terms of Use</a> and{" "}
          <a href="#privacy" className="privacy-link">Privacy Statement</a>
        </p>
      </div>
  );
};

export default RegisterSchool;