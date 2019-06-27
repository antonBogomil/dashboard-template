import React from 'react';
import {ICONS} from "../../constants";
import '../../styles/checkbox.scss';
import Icon from "../Icon";
const Checkbox = ({checked, color, disabled, onChange, value, label}) => {
    const className = `checkbox ${checked ? "checked" : ""} ${disabled ? 'disabled': ''}`;
    return (
        <label className={className}>
            <input onChange={onChange} value={value} checked={checked} disabled={disabled}  type='checkbox'/>
            <div className='checkbox-icon'>
                {checked && <Icon name={ICONS.CHECK} animate={true} variant={'primary'}/>}
            </div>
            <span className='label-text'>
                {label}
            </span>
        </label>
    );
};

export default Checkbox;