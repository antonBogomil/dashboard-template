import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, name, placeholder='', type, isRequired = false, label, icon = ''}) => {
    return (
        <div className='input-container'>
            {icon}
            <input type={type}
                   name={name}
                   value={value}
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
    isRequired: PropTypes.boolean,


};

export default Input;