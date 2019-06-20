import React from 'react';
import getIcons from "../../utils/getIcons";
import {ICONS} from "../../constants";

const Checkbox = ({checked, color, disabled, onChange, value, labelText}) => {
    return (
        <label className='checkbox'>
            <input onChange={onChange} value={value} checked={checked}  type='checkbox'/>
            <span className='checkbox-icon'>
                {checked && getIcons(ICONS.CHECK)}
            </span>
            {labelText && labelText}
        </label>
    );
};

export default Checkbox;