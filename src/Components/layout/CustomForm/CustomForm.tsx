import { Box, Button, FormControl, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import CustomTextField from '../CustomTextField/CustomTextField';

import './CustomForm.css'
import axiosInstance from '../../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../../models/Employee.model';
import CustomDropDown from '../CustomDropDown/CustomDropDown';

interface IEmployeeProps  {
    existingEmployee?: Employee | null | undefined;
    onSave: (employee: Employee) => void;
}

const CustomForm:React.FunctionComponent<IEmployeeProps> = ({ existingEmployee, onSave }) => {
    
    const [employees,setEmployees] = useState<Employee>();

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/list');
    }

    let emptyEmployee : Employee = {
        employeeId: null, 
        firstname: null, 
        lastname: null, 
        designation: null, 
        city: null,
        country: null,
        age: null
    };

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmployees({...existingEmployee? existingEmployee : emptyEmployee,[event.target.name] : event.target.value});
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        //event.preventDefault();
        console.log(employees);
        console.log(event);
        //existingEmployee ? existingEmployee.employeeId
        onSave(existingEmployee ? existingEmployee : emptyEmployee);
        
    }


    return (
        <Paper elevation={12}   style={{ width: 600, height: 500 , pageBreakAfter: 'always', paddingTop:100, paddingInline:30 }} >
            <Typography variant={"h4"} fontStyle={"consolus"}>Add Employee to Organization</Typography>
            <FormControl>
            <form onSubmit={(e) => handleSubmit(e)} className="form" >
                <CustomTextField changeHandler={handleChange} label={"First Name"} name={"firstname"}  />    
                <CustomTextField changeHandler={handleChange} label={"Last Name"} name={"lastname"} />
                <CustomTextField changeHandler={handleChange} label={"Designation"} name={"designation"} />
                <CustomTextField changeHandler={handleChange} label={"City"} name={"city"} />
                <CustomTextField changeHandler={handleChange} label={"Country"} name={"country"} />
                <CustomDropDown label={"Age"} name={"age"} changeHandler={handleChange} currentValue={0} placeHolder={"Please Select Age"}/>
                <Box display="flex" justifyContent="space-between">
                    <Button type={"submit"} variant={"contained"} className="button">Submit</Button>
                    <Button variant={"contained"} onClick={goToHome}>Go to List</Button>     
                </Box>
                
            </form>
            </FormControl>
        </Paper>
    );
}

export default CustomForm;