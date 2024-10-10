// src/UserManagement.tsx
import React, { useState } from 'react';


import { Employee } from '../../../models/Employee.model';
import CustomForm from '../../layout/CustomForm/CustomForm';
import axiosInstance from '../../../api/axiosInstance';

const EmployeeManagement: React.FC = () => {
  const [users, setUsers] = useState<Employee[]>([]);
  const [selectedUser, setSelectedUser] = useState<Employee | null>(null);

  const handleSave = async (user: Employee) => {
    if (selectedUser) {
      // Update existing user
      setUsers(users.map((u) => (u.employeeId === user.employeeId ? user : u)));
      setSelectedUser(null); // Clear selection after saving
            try {
                const response = await axiosInstance.post( '/employee/add', user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            } finally {
                
            }
    } else {
      // Create new user
      setUsers([...users, user]);
    }
  };

  const handleEdit = (user: Employee) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <CustomForm existingEmployee={selectedUser} onSave={handleSave}/>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
           <li key={user.employeeId}>
            {user.firstname} ({user.lastname}) 
            <button onClick={() => handleEdit(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;