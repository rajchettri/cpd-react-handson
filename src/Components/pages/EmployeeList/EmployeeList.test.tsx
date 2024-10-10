import { it, describe } from "vitest";
import { render } from '@testing-library/react'
import { Employee } from "../../../models/Employee.model";
import { EmployeeList } from "./EmployeeList";




describe('EmployeeList', () => { 
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

        const wrapper = render(<EmployeeList/>);
       

    });
});