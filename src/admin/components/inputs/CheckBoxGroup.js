import React, {useEffect} from 'react';
import Checkbox from "./Checkbox";
const CheckBoxGroup = ({name, options, value, onChange, label, error}) => {
    function handleChange(e) {
        let newChecked = value.slice(0);
        const v = e.target.value;
        if (value.indexOf(v) === -1) {
            newChecked.push(v);
        } else {
            newChecked.splice(value.indexOf(v), 1);
        }
        onChange && onChange(name, newChecked);
    }
    // useEffect(() => {
    // }, [value]);
    return (
        <div className={'field-group'}>
            {label && <label className='field-group-label'>{label}</label>}
            <div>
                {options.map((o) => {
                    const optionChecked = value.indexOf(o.value) !== -1;
                    return (
                        <div key={o.value}>
                            <Checkbox value={o.value} key={o.value} name={name} label={o.label} checked={optionChecked}
                                      onChange={handleChange}/>
                        </div>
                    )
                })}
            </div>
            <div className='valid-error'>{error}</div>
        </div>
    );
};

export default CheckBoxGroup;