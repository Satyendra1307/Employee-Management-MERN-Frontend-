import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from './UserAuth'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Email:", email, "Password:", password);

    try {
      const response = await axios.post("http://localhost:7088/api/loginuser", {
        email,
        password,
      })
       console.log(response.status)
    const token=response.data.token
    localStorage.setItem('token',token)
    console.log(token)

      console.log(response.status);

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/Home");
        login(token)
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password!");
    }
  };
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password}onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="signin-btn">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
