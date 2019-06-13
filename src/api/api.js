import {useState,useEffect} from 'react';
export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                // setData(json);
            } catch (error) {
                setError(error);
            }
            // setLoading(false);
        };
        fetchData();
    }, []);
    return [data,loading, error];
};