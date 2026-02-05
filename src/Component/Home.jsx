import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Employee Management System</h1>
        <p className="tagline">
          Manage your workforce efficiently and effortlessly
        </p>

        <div className="btn-group">
          <button
            className="btn primary"
            onClick={() => navigate("/add-employee")}
          >
            Get Started
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/employees")}
          >
            View Employees
          </button>
        </div>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>

        <div className="features">
          <div className="card">
            <h3>Add Employees</h3>
            <p>Add new employee details easily and quickly.</p>
          </div>

          <div className="card">
            <h3>Update Records</h3>
            <p>Edit employee information anytime.</p>
          </div>

          <div className="card">
            <h3>View Employees</h3>
            <p>See all employee records in one place.</p>
          </div>

          <div className="card">
            <h3>Delete Employees</h3>
            <p>Remove employee records securely.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
