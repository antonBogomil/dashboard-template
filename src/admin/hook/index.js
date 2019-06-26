import {useState, useEffect} from 'react';
import {validate} from "../settings/validation";

// export const useFetch = (url, options) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         if (url) {
//             setLoading(true);
//             getData(url, options, (data) => {
//                 setData(data);
//                 setLoading(false);
//             });
//         } else {
//             setLoading(false);
//             setData([]);
//         }
//     }, []);
//     return [data, loading, error];
// };


export const useForm = (initState,callback, validationRules) => {
    const [values, setValues] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
            console.log('Form has been submitted successfully!');
        }
    }, [errors]);
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values, validationRules));
        setIsSubmitting(true);
    };
    const handleReset = (event)=>{
        if (event) event.preventDefault();
        setValues(initState);
    };
    const handleChange = (name, value) => {
        console.log(name,value);
        setErrors((prev) => {
            return {
                ...prev,
                [name]: null
            }
        });
        setValues(values => ({...values, [name]: value}));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        handleReset
    }

};