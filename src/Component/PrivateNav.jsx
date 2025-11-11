import React, { useState } from 'react';
import {useAuth} from './UserAuth'
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
        <div>
          <Link to="/view">EmployeeDetails</Link>
          <Link to="/add">AddEmployee</Link>
          <button onClick={handleLogout}>LogOut</button>
        </div>
    );
}

export default PrivateNav;