import React, {useState} from 'react';
import Checkbox from "./Checkbox";


const CheckBoxGroup = ({name, options, onChange, label, error}) => {
    const [checked, setChecked] = useState([])

    function handleChange(e) {
        let newChecked = checked.slice(0);
        const value = e.target.value;
        if (checked.indexOf(value) === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(checked.indexOf(value), 1);
        }
        setChecked(newChecked);
        onChange && onChange(name, newChecked);
    }

    return (
        <div className={'field-group'}>
            {label && <label className='field-group-label'>{label}</label>}
            <div>
                {options.map((o) => {
                    const optionChecked = checked.indexOf(o.value) !== -1;
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