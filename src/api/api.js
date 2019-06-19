import {useState, useEffect} from 'react';

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
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
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    var esc = encodeURIComponent;
    let query = params.length ? '' : '?' + Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    try {

        const res = await fetch(url + query);
        if (res.status === 200){
            const json = await res.json();
            onSuccess(json);
        }
        else {
             throw  Error(res.statusText);
        }

    } catch (error) {
        onError(error);
    }

};
export const postData = async function (url, params, onSuccess, onError) {

};