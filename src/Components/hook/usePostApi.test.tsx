import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react'
import { usePostApi } from "./usePostApi"
import { Employee } from "../../models/Employee.model";

describe('usePostApi', () => { 
    it('should return the create employee object', () => { 
        const items = '/employee/add';
        const employee: Employee = {
            employeeId : 12,
            firstname: "raj",
            lastname:"chettri",
            designation:"",
            city:"Kolkata",
            country:"India",
            age:35
        };

        const { result } = renderHook(() => usePostApi(items,employee));

        expect(result.current.data).toStrictEqual(undefined);
        expect(result.current.error).toEqual(null);
        expect(result.current.isLoading).toEqual(true);
    });
});