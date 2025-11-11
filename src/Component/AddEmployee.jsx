import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployee.css'

export default function AddEmployee() {
  const [employees, setEmployees] = useState([

  
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    city: "",
    salary: ""
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEmployee = async () => {
    if (!formData.id || !formData.name || !formData.age || !formData.city || !formData.salary) {
      alert("Please fill all fields!");
      return;
    }

    const newEmployee = {
      id: formData.id,
      name: formData.name,
      age: formData.age,
      city: formData.city,
      salary: formData.salary
    };

    try {
     
      const response = await axios.post("http://localhost:7088/api/addemp", newEmployee);

      if (response.status === 200 || response.status === 201) {
        alert("Employee added successfully!");
      }

     
      setEmployees((prev) => [...prev, newEmployee]);
      clearForm();

    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again.");
    }
  };


  const clearForm = () => {
    setFormData({
      id: "",
      name: "",
      age: "",
      city: "",
      salary: ""
    });
  };


  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className='main-div'>
      <h1 className='demo'>Employee Management</h1>

      <div className='input'>
        <input
          className='xyz'
          name='id'
          value={formData.id}
          onChange={handleChange}
          placeholder='Enter the ID'
        /><br />

        <input
          className='xyz'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter the Name'
        /><br />

        <input
          className='xyz'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Enter the Age'
        /><br />

        <input
          className='xyz'
          name='city'
          value={formData.city}
          onChange={handleChange}
          placeholder='Enter the City'
        /><br />

        <input
          className='xyz'
          name='salary'
          value={formData.salary}
          onChange={handleChange}
          placeholder='Enter the Salary'
        /><br />

        <button className='xyz button' onClick={addEmployee}>Submit</button>
      </div>

      <table className='table'>
        <thead>
          <tr className='table-head'>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className='table-data' style={{ border: "1px solid black" }}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
              <td>{emp.salary}</td>
              <td>
                <button className='button-del' onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}






 