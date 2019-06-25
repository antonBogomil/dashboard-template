import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../../styles/select.scss';

const Select = ({name, selectedValue={},value, onChange, title, options = [], multiple = false}) => {
    const MAX_ROWS = 6;
    const [selected, setSelected] = useState(selectedValue);
    const [open, setOpen] = useState(false);
    const selectEl = useRef(null);
    function onSelect(selected) {
        setSelected(selected);
        onChange(selected);
        setOpen(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])
    function handleClick(e) {
        if (selectEl.current.contains(e.target)) return;
        onClickOutside()
    }

    function onClickOutside() {
        setOpen(false);
    }
    return (
        <div className="select" ref={selectEl}>
            {/*<span>{title}</span>*/}
            <div className={`select`}>
                <div className='select-title' onClick={() => {
                    setOpen(true)
                }}>
                    {selected.label || "Select ..."}
                </div>
                <div
                    className={`select-options ${open ? 'open' : 'hide'} ${options.length > MAX_ROWS ? 'scrolled' : ''}`}>
                    {options.map((item) => {
                        return (
                            <div key={item.value}
                                 onClick={() => {
                                     onSelect(item)
                                 }}
                                 className={`select-option ${item.value===selected.value ? 'selected-option': ''}`}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        label: PropTypes.string.isRequired,
    })).isRequired,
    selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
};
export default Select