import React, {} from 'react';
import '../../styles/select.scss'
import PropTypes from "prop-types";


const data = [
    {
        id: 0,
        title: 'New York',
    },
    {
        id: 1,
        title: 'Dublin',
    },
    {
        id: 2,
        title: 'California',
    },
    {
        id: 3,
        title: 'Istanbul',
    },
    {
        id: 4,
        title: 'Izmir',
    }
];

const Select = ({title, selectedId, options = data, onChange}) => {
    function handleSelect(e) {
        const id = +e.target.value;
        onChange(id);
    }

    return (
        <div className="select">
            <span>{title}</span>
            <select className={`select`} defaultValue={+selectedId} onChange={handleSelect}>
                {options.map((item) => {
                    return (
                        <option key={item.id}
                                value={item.id}
                                // selected={+selectedId===+item.id}
                                className={'select-option'}
                        >
                            {item.title}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        title: PropTypes.string.isRequired,
    })).isRequired,
    selectedId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])

};

export default Select;
