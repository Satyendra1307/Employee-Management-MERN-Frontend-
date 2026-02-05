import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Signup">Signup</Link>
      <Link to="/Signin">Signin</Link>
      
      {/* <Link to="/Contact">Contact</Link> */}
    </div>
  );
}



export default Navbar;
