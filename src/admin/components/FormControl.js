import React from 'react';
import '../styles/form.scss';

const FormControl = ({children, required, error}) => {
    const className = 'form-element ' + (error ? ' error' : '');
    return (
        <div className={className}>
            {children}
        </div>
    );
};
FormControl.FormLabel = ({children}) => {
    return (
        <div className='form-label'>
            {children}
        </div>
    );
};
FormControl.FormHelper = ({children}) => {
    return (
        <div className='form-helper-text'>
            {children}
        </div>
    )
};

export default FormControl;