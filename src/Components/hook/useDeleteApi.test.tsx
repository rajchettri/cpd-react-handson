import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react'
import { useDeleteApi } from "./useDeleteApi"
import { Employee } from "../../models/Employee.model";


describe('useDeleteApi', () => { 
    it('should return a default search term and original items', () => { 
        const items = 'employee/delete';
        const employee: Employee = {
            employeeId: 1,
            firstname: "raj",
            lastname:"",
            designation:"",
            city:"",
            country:"",
            age:0
        };

        const { result } = renderHook(() => useDeleteApi(items,employee));

        expect(result.current.data).toStrictEqual(undefined);
        expect(result.current.error).toEqual(null);
    });
});