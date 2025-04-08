import { useEffect, useState } from "react";

export function useForm(initialValues, sumbitCallback) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, []);

    const changeHandler = (e) => {
        
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();

        sumbitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
}
