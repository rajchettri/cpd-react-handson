
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import CustomForm from './Components/layout/CustomForm/CustomForm';
import Home from './Components/pages/Home/Home';
import NavBar from './Components/layout/NavBar/NavBar';
import { EmployeeList } from './Components/pages/EmployeeList/EmployeeList';
import { useState } from 'react';
import { Employee } from './models/Employee.model';
import EmployeeManagement from './Components/pages/EmployeeManagement/EmployeeManagement';



function App() {
  //const [count, setCount] = useState(0)

    let emp: Employee = {
      employeeId: 0,
      firstname: "",
      lastname: "",
      designation: "",
      city: "",
      country: "",
      age: 0,
    };

  const [employee, setEmployee] = useState<Employee>(emp);

  //setEmployee(emp);

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/create' element = {<CustomForm existingEmployee={employee} onSave={EmployeeManagement}/>}/>
        <Route path='/list' element = {<EmployeeList/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
    
    
);
}

export default App
