import { AuthProvider, useAuth } from './Component/UserAuth';
import React from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';

import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Home from './Component/Home';
import AddEmployee from './Component/AddEmployee';
import PrivateNav from './Component/PrivateNav';
import EmployeeDetails from './Component/EmployeeDetails';

function AppContaint() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? <PrivateNav /> : <Navbar />}

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Employee Routes */}
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employees" element={<EmployeeDetails />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContaint />
    </AuthProvider>
  );
}

export default App;
