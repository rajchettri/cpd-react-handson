import { it, describe, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import ActionAlerts from "./ActionAlert";





describe('ActionAlert', () => { 
    it('should return the  employee components with data', () => { 
    
    

    render(<ActionAlerts/>);
    expect(screen.findByText('Employee Added!'));   

    });
});