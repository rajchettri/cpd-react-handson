import { expect, it, describe } from "vitest";
import { render, screen } from '@testing-library/react'


import Employees from "./Employees";
import { Employee } from "../../../models/Employee.model";



describe('usePostApi', () => { 
    it('should return the  employee components with data', () => { 
    
        
        let employee: Employee = {
            employeeId : 12,
            firstname: "raj",
            lastname:"chettri",
            designation:"",
            city:"Kolkata",
            country:"India",
            age:35
        }

        render(<Employees employee={employee}/>);
       

    });
});