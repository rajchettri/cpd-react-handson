
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance";
import { Employee } from "../../models/Employee.model";


export const usePutApi = ( url: string, requestBody: Employee) => {

    const [data, setData] = useState<String>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.put(url, requestBody);
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