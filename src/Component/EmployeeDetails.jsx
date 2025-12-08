import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeDetails.css';

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://employee-management-mern-backend-1.onrender.com/api/get');
      const data = await response.json();
      setEmployees(data.user);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching employee data:', error);
      alert('Failed to fetch employee details');
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://employee-management-mern-backend-1.onrender.com/api/delete/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEditClick = (employee) => {
    setEditingEmployee({ ...employee });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://employee-management-mern-backend-1.onrender.com/api/update/${editingEmployee._id}`, editingEmployee);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employee-details__container">
      <h2 className="employee-details__title">Employee Information</h2>
      

      {showTable && (
        <table className="employee-details__table">
          <thead>
            <tr className="employee-details__table-head">
              <th>ID</th><th>Name</th><th>Age</th><th>City</th><th>Salary</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id} className="employee-details__table-row">
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.city}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className="employee-details__delete-btn" onClick={() => deleteEmployee(emp._id)}>Delete</button>
                  <button className="employee-details__update-btn" onClick={() => handleEditClick(emp)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingEmployee && (
        <div className="employee-details__form-container">
          <h3 className="employee-details__form-title">Update Employee</h3>
          <form onSubmit={handleUpdateSubmit} className="employee-details__form">
            <input type="text" name="name" value={editingEmployee.name} onChange={handleUpdateChange} placeholder="Name" required />
            <input type="number" name="age" value={editingEmployee.age} onChange={handleUpdateChange} placeholder="Age" required />
            <input type="text" name="city" value={editingEmployee.city} onChange={handleUpdateChange} placeholder="City" required />
            <input type="number" name="salary" value={editingEmployee.salary} onChange={handleUpdateChange} placeholder="Salary" required />
            <button type="submit" className="employee-details__save-btn">Save</button>
            <button type="button" className="employee-details__cancel-btn" onClick={() => setEditingEmployee(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;