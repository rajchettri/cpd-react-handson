import {  Box, Button, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


import Employees from "../Employee/Employees";
import { useApi } from "../../hook/useApi";
import CustomElementView from "../../layout/CustomElementView/CustomElementView";



export const EmployeeList = () => {

    const { data, isLoading, error } = useApi('/get?search=');

    return (
        <div>
            {isLoading ? <p>Loading ...</p> : ''}
            <div className="row">
                    <div className="col-md-9">
                    </div>
                    
            </div>
            
            <TableContainer style={{paddingTop:50}}>
            
            <Table>
                <TableHead>
                    <TableCell><CustomElementView value="Employee Id" label="Employee Id" /></TableCell>
                    <TableCell><CustomElementView label="First Name" value="First Name" /></TableCell>
                    <TableCell><CustomElementView label="Last Name" value="Last Name" /></TableCell>
                    <TableCell><CustomElementView label="Designation" value="Designation" /></TableCell>
                    <TableCell><CustomElementView label="City" value="City" />   </TableCell>
                    <TableCell><CustomElementView label="Country" value="Country" />   </TableCell>
                    <TableCell><CustomElementView label="Employee Age" value="Employee Age" /></TableCell>
                    <TableCell><h3>Action</h3></TableCell>
                </TableHead>
                
                {data ? <>{data.map(emp => 
                                            <TableRow>
                                                <Employees employee={emp} />
                                            </TableRow>
                                    )
                            }</> : ''}
            </Table>
            </TableContainer>
           
            
            {error ? <p>{error}</p> : ''}

        </div>
    );

}