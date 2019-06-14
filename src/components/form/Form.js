import React from 'react';
import PropTypes from 'prop-types';
import {FORM_FIELD_TYPES} from "../../constants/const";


const Form = ({settings, values}) => {
    const {fields} = settings;
    const onChange = (name,e)=>{
        console.log(name,e.target.value);
    };
    return (
        <div className='form-container'>
            <form className='form'>
                {fields.map((field) => (<FormField {...field} value={values[field.name]} onChange={onChange}/>))}

            </form>
        </div>
    );
};


const FormField = props => {
    const {name, value, placeholder, onChange, type} = props;
    const {TEXTAREA, EMAIL, TEXT} = FORM_FIELD_TYPES;
    let input;
    switch (type) {
        case TEXTAREA: {
            input = <textarea onChange={(e) => {
                onChange(name,e)
            }} name={name} value={value}/>;
            break;
        }
        default : {
            input = <input onChange={(e)=>{onChange(name,e)}} name={name} value={value}/>
        }
    }
    return (
        <div className='field-container'>
            {input}
        </div>
    )
};

Form.propTypes = {};

export default Form;