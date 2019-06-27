import React, {useState, useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';
import '../../styles/switch.scss';
const Switch = ({defaultValue, value, name, onChange, variant='primary',label}) => {
    return (
        <div className={`field-switch ${value ? 'on' : 'off'} ${variant}`}>
            <label>
                <span className='field-label'>{label}</span>
                <input type={'checkbox'}
                       name={name}
                    // defaultChecked={defaultValue}
                       checked={value}
                       onChange={() => {
                           onChange(name, !value)
                       }}
                />
                <div className='switch-track'>
                    <div className='switch-thumb'/>
                </div>
            </label>

        </div>
    )
};
export default Switch