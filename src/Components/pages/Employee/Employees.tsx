import { Button, TableCell } from "@mui/material";
import { Employee } from "../../../models/Employee.model";
import CustomElementView from "../../layout/CustomElementView/CustomElementView";
import CustomForm from "../../layout/CustomForm/CustomForm";




interface IEmployeeProps {
    employee: Employee
}

const Employees: React.FunctionComponent<IEmployeeProps> = ({ employee }) => {

   // const { data, isLoading, error } = useDeleteApi('/employee/delete/', employee);

    const updateEmployee = () => {
        //const response = usePutApi('/employee/update/{employee.employeeId}', employee);
        //console.log(response);

    }

    const deleteEmployee = () => {
        //console.log(data);
    }

    return (
     <>
            
                <TableCell><CustomElementView label="Employee Id" value={employee?.employeeId?.toString() ? employee.employeeId.toString() : null}/></TableCell>
                <TableCell><CustomElementView label="First Name" value={employee.firstname}/></TableCell>
                <TableCell><CustomElementView label="Last Name" value={employee.lastname}/></TableCell>
                <TableCell><CustomElementView label="Designation" value={employee.designation}/></TableCell>
                <TableCell><CustomElementView label="City" value={employee.city}/>   </TableCell>
                <TableCell><CustomElementView label="Country" value={employee.country}/>   </TableCell>
                <TableCell><CustomElementView label="Employee Age" value={employee.age?.toString() ? employee.age?.toString() :  null}/></TableCell>
                
                <TableCell>
                    <Button onClick={updateEmployee} LinkComponent={CustomForm}>Edit</Button>
                    <Button onClick={deleteEmployee}>Delete</Button>
                </TableCell>
                </>
    );


}


export default Employees;