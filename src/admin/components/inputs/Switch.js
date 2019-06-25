import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../../styles/switch.scss';
const Switch = ({defaultValue, value, name, onChange, variant}) => {
    let on = value;
    return (
        <div className='form-element'>
            <div className={`field-switch ${on ? 'on' : 'off'} ${variant}`}>
                <label>
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
        </div>
    )
};
export default Switch