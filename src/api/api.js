import {useState, useEffect} from 'react';

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (url) {
            const fetchData = async () => {
                try {
                    const res = await fetch(url, options);
                    const json = await res.json();
                    setData(json);

                } catch (error) {
                    setError(error);
                }
                setLoading(false);

            };
            fetchData();
        }
        else {
            setLoading(false);
            setData(true);
        }
    }, []);
    return [data, loading, error];
};