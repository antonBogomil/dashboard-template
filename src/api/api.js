import {useState, useEffect} from 'react';

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (url) {
            setLoading(true);
            getData(url, options, (data) => {
                setData(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
            setData([]);
        }
    }, []);
    return [data, loading, error];
};
export const getData = async function (url, params, onSuccess, onError) {
    try {
        const res = await fetch(url, params);
        const json = await res.json();
        onSuccess(json);

    } catch (error) {
        onError(error);
    }

};