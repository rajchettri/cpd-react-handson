import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react'
import { useApi } from "./useApi"

describe('useApi', () => { 
    it('should return a default search term and original items', () => { 
        const items = '/get?search=';

        const { result } = renderHook(() => useApi(items));

        expect(result.current.data).toStrictEqual([]);
        expect(result.current.error).toEqual(null);
    });
});