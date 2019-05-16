import React from 'react';
import PropTypes from 'prop-types';
import '../styles/input.scss'
const Input = ({value, name, placeholder = '', onChange, type,variant='', isRequired = false, label, icon = ''}) => {
    return (
        <div className='form-group'>
            {icon && <span className='form-group-icon'>{icon}</span>}
            {label && <label>{label}</label>
            }
            <input type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   className={variant}
                   placeholder={placeholder}
                   required={isRequired}
            />
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'date']),
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    variant: PropTypes.oneOf(['outlined'])
};

export default Input;