import React from 'react';
import {ICONS} from "../../constants";
import '../../styles/checkbox.scss';
import Icon from "../Icon";
const Checkbox = ({checked, color, disabled, onChange, value, label}) => {
    return (
        <label className='checkbox'>
            <input onChange={onChange} value={value} checked={checked}  type='checkbox'/>
            <div className='checkbox-icon'>
                {checked && <Icon name={ICONS.CHECK}/>}
            </div>
            <span className='label-text'>
                {label}
            </span>
        </label>
    );
};

export default Checkbox;