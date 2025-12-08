import React from 'react';
import { useAuth } from './UserAuth';
import { Link, useNavigate } from 'react-router-dom';
import './PrivateNav.css';

function PrivateNav() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/Home');
  };

  return (
    <div className="private-nav">
      <Link to="/view" className="private-nav__link">EmployeeDetails</Link>
      <Link to="/add" className="private-nav__link">AddEmployee</Link>
      <button onClick={handleLogout} className="private-nav__button">LogOut</button>
    </div>
  );
}

export default PrivateNav;