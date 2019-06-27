import React from 'react';
import '../../styles/radio.scss'
import Icon from "../Icon";
import {ICONS} from "../../constants";

const RadioGroup = ({name, value, onChange, options, variant = 'primary'}) => {
    function handleChange(e) {
        onChange(name, e.target.value)
    }

    return (
        <div className={'radio-group ' + variant}>
            {
                options.map((o) => {
                    return (
                        <Radio
                            key={o.value}
                            value={o.value}
                            handleChange={handleChange}
                            checked={o.value === value}
                            label={o.label}
                            name={name}/>

                    )
                })

            }
        </div>
    );
};


const Radio = ({handleChange, checked, value, name, label}) => {
    return (
        <label className='radio'>
            <input type={'radio'} checked={checked} value={value} onChange={handleChange}/>
            <span className='radio-icon'>
                            <Icon name={checked ? ICONS.RADIO_TRUE : ICONS.RADIO_FALSE} animate={true}/>
            </span>
            {label && <span className='label-text'>{label}</span>}
        </label>
    )
};

export default RadioGroup;