import React from 'react';
import {useForm} from "../../hook";
import Button from "../Button";
import TextField from "../inputs/TextField";

const UserAddForm = () => {

    const {values, handleChange, handleSubmit} = useForm(callback);


    function callback(values) {
        console.log(values);
    }

    return (
        <form autoComplete='off'>
            <div className='form-row'>
                <div className='form-col flex-col'>
                    <div className='form-element'>
                        <TextField onChange={handleChange} value={values['firstName']} name={'firstName'} title={'First name'}/>
                    </div>
                </div>
            </div>

            <div className='btn-container'>
                <Button type='submit'>Save</Button>
                <Button type='reset' variant='secondary'>Reset</Button>
            </div>
        </form>
    );
};

export default UserAddForm;