import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Signin">SignIn</Link>
      <Link to="/Signup">SignUp</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}



export default Navbar;
