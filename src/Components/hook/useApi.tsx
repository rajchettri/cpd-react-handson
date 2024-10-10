
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance";
import { Employee } from "../../models/Employee.model";


export const useApi = ( url: string) => {

    const [data, setData] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(url);
            console.log(response);
            setData(response.data);
        } catch (err) {
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data , isLoading, error };
    
}