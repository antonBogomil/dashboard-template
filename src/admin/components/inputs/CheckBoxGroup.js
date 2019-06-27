import React, {useEffect} from 'react';
import Checkbox from "./Checkbox";
import toggle from '../../../utils/toggle';

const CheckBoxGroup = ({name, options, value: checked, onChange, label, error}) => {
    function handleChange(e) {
        const value = e.target.value;
        const checkedNew = toggle(checked, value);
        onChange && onChange(name, checkedNew);
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