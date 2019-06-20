import React, {useState} from 'react';
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

const Select = ({title, defaultValue , options = data ,onChange}) => {
    const initialState = {
        open: false,
        selected: undefined,
    };
    const [state, setState] = useState(initialState);
    const {open, selected} = state;


    function handleOpen() {
        setState((old) => {
            return {
                ...old,
                open: !old.open
            }
        })
    }

    function handleSelect(id) {
        setState((old) => {
            return {
                ...old,
                selected: id
            }
        });
        onChange(id);
        handleOpen();
    }

    const value = selected !== undefined ? options.find((o) => {
        return o.id === selected
    }) : defaultValue;
    return (
        <div className="select">
            <span>{title}</span>
            <div className='select-title' onClick={handleOpen}>{value ? value.title : ''}</div>
            <div className={`select-options ${open ? 'open' : 'closed'}`}>
                {options.map((item) => {
                    return (
                        <div key={item.id}
                             className={'select-option'}
                             onClick={() => {
                                 handleSelect(item.id)
                             }}
                        >
                            {item.title}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        title: PropTypes.string.isRequired,
        defaultValue: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            title: PropTypes.string
        })
    })).isRequired,
};

export default Select;
