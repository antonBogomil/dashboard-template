import React from 'react';
import PropTypes from 'prop-types';
import {FORM_FIELD_TYPES} from "../../constants/const";
import '../../styles/form.scss'
import Input from "./Input";
import {useForm} from "../../hook";
import Button from "../Button";

const Form = ({settings, values}) => {
    const {fields} = settings;
    const onChange = (name, e) => {
        // console.log(name,e.target.value);
    };
    return (
        <div className='form-container'>
            <form className='form'>
                {fields.map((field) => (<Input {...field} key={field.id} value={values[field.name]} variant={'outlined'}
                                               onChange={onChange}/>))}
            </form>
        </div>
    );
};

Form.propTypes = {};

export default Form;

export const FormWithHook = ({settings,onSubmit}, ) => {
    const {values, handleChange, handleSubmit} = useForm(submitCallback);
    function submitCallback() {
        console.log(values);
        onSubmit &&  onSubmit(values);
    }
    return (
        <form onSubmit={handleSubmit}>
            {settings.fields && settings.fields.map((field) => {
                switch (field.type) {
                    case FORM_FIELD_TYPES.CHECKBOX:
                        return <input key={field.id} type='checkbox' name={field.name} onChange={handleChange}
                                      value={values[field.name] || 'admin'}/>;
                    default :
                        return <Input {...field} key={field.id} name={field.name} value={values[field.name] || ''}
                                      variant={'outlined'}
                                      onChange={handleChange}/>
                }
            })}
            <div className='form-buttons'>
                {settings.buttons && settings.buttons.map((btn) => {
                    const variant = btn.type === 'submit' ? 'primary' : 'secondary';
                    return <Button key={btn.id} type={btn.type} variant={variant}>{btn.name}</Button>
                })}
            </div>
        </form>
    );
};