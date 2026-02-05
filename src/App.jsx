import { AuthProvider, useAuth } from './Component/UserAuth';
import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Home from './Component/Home';
import AddEmployee from './Component/AddEmployee';
import PrivateNav from './Component/PrivateNav';
import EmployeeDetails from './Component/EmployeeDetails';
// import Contact from './Component/Contact';

function AppContaint() {
      const {isLoggedIn} = useAuth()
  return (
    <div>
      {isLoggedIn ? <PrivateNav/>:<Navbar/>}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/add' element={<AddEmployee/>}></Route>
        <Route path='/view' element={<EmployeeDetails/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        {/* <Route path='/Contact' element={<Contact/>}></Route> */}
      </Routes>
    </div>
  )
}
function App (){ 
  return(
      <AuthProvider>
        <AppContaint/>
      </AuthProvider>
  )
}
export default App