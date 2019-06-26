import React from 'react';
import {useForm} from "../../hook";
import Button from "../Button";
import TextField from "../inputs/TextField";
import CheckBoxGroup from "../inputs/CheckBoxGroup";
import Switch from "../inputs/Switch";

const validationRules = {
    password: {
        min: 8,
        max: 20,
        required: true,
        confirm: true,
    },
    firstName: {
        min: 3,
        max: 100,
    },
    lastName: {
        min: 3,
        max: 100,
    },
    roles:{
        required: true
    }
};

const checkBoxOptions = [
    {
        value: 'ROLE_ADMIN',
        label: 'Admin',
    },
    {
        value: "ROLE_USER",
        label: 'User'
    },
    {
        value: "ROLE_MANAGER",
        label: 'Manager'
    },
];


const UserAddForm = () => {
    const {values, handleChange, handleSubmit, errors} = useForm({
        isActive: true,
        roles: [],
    }, callback, validationRules);

    function callback(values) {
        // console.log(values);
    }
    // console.log(values);

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <div className='form-row flex-row'>
                <div className='form-col flex-col'>
                    {/*<div className='form-element'>*/}
                        {/*<TextField onChange={handleChange} value={values['firstName']} error={errors['firstName']}*/}
                                   {/*isRequired={true}*/}
                                   {/*name={'firstName'}*/}
                                   {/*title={'First name'}/>*/}
                    {/*</div>*/}
                    {/*<div className='form-element'>*/}
                        {/*<TextField onChange={handleChange} value={values['lastName']} error={errors['lastName']}*/}
                                   {/*isRequired={true}*/}
                                   {/*name={'lastName'}*/}
                                   {/*title={'Last name'}/>*/}
                    {/*</div>*/}
                    {/*<div className='form-element'>*/}
                        {/*<TextField onChange={handleChange} value={values['password']} error={errors['password']}*/}
                                   {/*isRequired={true}*/}
                                   {/*name={'password'}*/}
                                   {/*title={'Create password'} type={'password'}/>*/}
                    {/*</div>*/}
                    {/*<div className='form-element'>*/}
                        {/*<TextField onChange={handleChange} value={values['passwordConfirm']}*/}
                                   {/*error={errors['passwordConfirm']} isRequired={true}*/}
                                   {/*name={'passwordConfirm'}*/}
                                   {/*title={'Repeat password'} type={'password'}/>*/}
                    {/*</div>*/}
                    <div className='form-element'>
                        <CheckBoxGroup options={checkBoxOptions}
                                       name={'roles'}
                                       onChange={handleChange}
                                       error={errors['roles']}
                                       label="Choose user roles" isRequired={true}/>
                    </div>

                    <div className='form-element'>
                        <Switch onChange={handleChange} name='isActive' defaultValue={true} value={values['isActive']}
                                label={'User active'}/>
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