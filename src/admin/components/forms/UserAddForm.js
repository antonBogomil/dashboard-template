import React from 'react';
import {useForm} from "../../hook";
import Button from "../Button";
import TextField from "../inputs/TextField";
import CheckBoxGroup from "../inputs/CheckBoxGroup";
import Switch from "../inputs/Switch";
import CardBlock from "../CardBlock";
import RadioGroup from "../inputs/RadioGroup";

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
    roles: {
        required: true,
    }
};

const roles = [
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
const gender = [
    {value: "m", label: "male"},
    {value: "w", label: "female"},
];

const UserAddForm = () => {
    const {values, handleChange, handleSubmit, handleReset, errors} = useForm({
        isActive: true,
        roles: ["USER"],
        gender: "w"
    }, callback, validationRules);

    function callback(values) {
        // console.log(values);
    }


    return (
        <div className='form-wrapper'>
            <CardBlock>
                <CardBlock.Body>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div className='form-row flex-row'>
                            <div className='form-col flex-col'>
                                <div className='form-element'>
                                    <TextField onChange={handleChange}
                                               value={values['firstName']}
                                               error={errors['firstName']}
                                               isRequired={true}
                                               name={'firstName'}
                                               title={'First name'}/>
                                </div>
                                <div className='form-element'>
                                    <TextField onChange={handleChange}
                                               value={values['lastName']}
                                               error={errors['lastName']}
                                               isRequired={true}
                                               name={'lastName'}
                                               title={'Last name'}/>
                                </div>
                                <div className='form-element'>
                                    <TextField onChange={handleChange}
                                               value={values['password']}
                                               error={errors['password']}
                                               isRequired={true}
                                               name={'password'}
                                               title={'Create password'}
                                               type={'password'}/>
                                </div>
                                <div className='form-element'>
                                    <TextField onChange={handleChange}
                                               value={values['passwordConfirm']}
                                               error={errors['passwordConfirm']}
                                               isRequired={true}
                                               name={'passwordConfirm'}
                                               title={'Repeat password'}
                                               type={'password'}/>
                                </div>
                                <div className='form-element'>
                                    <RadioGroup options={gender} name='gender' onChange={handleChange}
                                                value={values['gender']}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row form-row'>
                            <div className='flex-col f'>
                                <div className='form-element'>
                                    <CheckBoxGroup options={roles}
                                                   name={'roles'}
                                                   onChange={handleChange}
                                                   value={values['roles']}
                                                   error={errors['roles']}
                                                   label="Choose user roles" isRequired={true}/>
                                </div>
                                <div className='form-element'>
                                    <Switch onChange={handleChange}
                                            name='isActive'
                                            defaultValue={true}
                                            value={values['isActive']}
                                            label={'User active'}/>
                                </div>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <Button type='submit'>Save</Button>
                            <Button type='reset' variant='secondary' onClick={handleReset}>Reset</Button>
                        </div>
                    </form>
                </CardBlock.Body>
            </CardBlock>

        </div>
    );
};

export default UserAddForm;