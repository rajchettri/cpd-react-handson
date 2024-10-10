import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react'
import { usePutApi } from "./usePutApi"
import { Employee } from "../../models/Employee.model";

describe('usePutApi', () => { 
    it('should return the edit employee object', () => { 
        const items = '/employee/update/12'; // Employeed Id : 12
        const employee: Employee = {
            employeeId : 12,
            firstname: "raj kumar",
            lastname:"chettri",
            designation:"",
            city:"Kolkata",
            country:"India",
            age:36
        };

        const { result } = renderHook(() => usePutApi(items,employee));

        expect(result.current.data).toStrictEqual(undefined);
        expect(result.current.error).toEqual(null);
        expect(result.current.isLoading).toEqual(true);
    });
});