import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, name, placeholder = '', onChange, type, variant = 'simple', isRequired = false, disabled, label, icon = '', error}) => {
    const classN = `form-field form-field-${variant} ${error ? 'valid-error': ''}`;
    return (
        <div className={classN}>
            {label && <label>{label}</label>}
            <div className='input-container'>
                {icon && <span className='form-group-icon'>{icon}</span>}
                {
                    type === 'textarea' ?
                        <textarea
                            name={name}
                            value={value}
                            onChange={onChange}
                            className={variant}
                            placeholder={placeholder}
                            rows={4}
                            required={isRequired}
                            disabled={disabled}
                        />
                        :
                        <input type={type}
                               name={name}
                               value={value}
                               onChange={onChange}
                               className={variant}
                               disabled={disabled}
                               placeholder={placeholder}
                               required={isRequired}
                        />
                }
            </div>
            {error && <div className='field-error error'>*{error}</div>}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'date', 'textarea']),
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    variant: PropTypes.oneOf(['outlined', 'simple'])
};

export default Input;