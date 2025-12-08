import React, { useState } from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup()  {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const navigate = useNavigate();
  const handlesubmit=async (e)=>{
        e.preventDefault()
        console.log(name,email,password)

   const response= await axios.post('https://employee-management-mern-backend-1.onrender.com/api/saveuser',
      {
        name,
        email,
        password
  })
    console.log(response.status)
    
    if(response.status===201){
        navigate('/')
    }
}
  return (
    <div className='signup-container'>
      <form onSubmit={handlesubmit }>
        <h2>Create Account</h2>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e)=>setname(e.target.value)} placeholder='enter the name' required/>
        </div>
         <div>
          <label htmlFor=""> Email</label>
          <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email' required/>
        </div>
         <div>
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter the password'required />
        </div>
  
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
