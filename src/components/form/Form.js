import React from 'react';
import PropTypes from 'prop-types';
import {FORM_FIELD_TYPES} from "../../constants/const";
import '../../styles/form.scss'
import Input from "./Input";

const Form = ({settings, values}) => {
    const {fields} = settings;
    const onChange = (name,e)=>{
        // console.log(name,e.target.value);
    };
    return (
        <div className='form-container'>
            <form className='form'>
                {fields.map((field) => (<Input {...field} key={field.id} value={values[field.name]} variant={'outlined'} onChange={onChange}/>))}
            </form>
        </div>
    );
};

Form.propTypes = {};

export default Form;