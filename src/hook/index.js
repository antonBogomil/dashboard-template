import {getData} from "../api";
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
export const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);


    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        // setErrors(validate(values));
        setIsSubmitting(true);
    };
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }

};