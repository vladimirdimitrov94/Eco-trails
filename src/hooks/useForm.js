import { useState } from "react";

export function useForm(initialValues, sumbitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function sumbitHandler(e) {
        e.preventDefault();

        sumbitCallback(values);
    }

    return {
        values,
        changeHandler,
        sumbitHandler
    }
}
