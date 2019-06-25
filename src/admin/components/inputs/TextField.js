import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../../styles/textfield.scss';

const TextField = ({name, type, title, value = '', onChange, variant = 'primary'}) => {
    const isEmpty = value !== '';
    const [focus, setFocus] = useState(false);
    const [ui, setUi] = useState({labelWidth: 0});
    const [showPassword, setShowPassword] = useState(false);
    const element = useRef(null);

    function handleChange(e) {
        // const v = e.target.value;
        onChange(e)
    }

    function showPasswordSwitch() {
        setShowPassword((prev) => {
            return !prev
        })
    }

    function onFocus(flag) {
        setFocus(flag)
    }

    useEffect(() => {
        const width = getWitdh(element);
        setUi({labelWidth: width});
    }, [title]);
    const {labelWidth} = ui;
    return (
        <div className={`field-text ${focus ? 'focused' : ''} ${variant} ${isEmpty ? 'not-empty' : ''}`}>
            <fieldset>
                <legend style={{width: labelWidth}}><span> </span></legend>
            </fieldset>
            <input type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                   onFocus={() => {
                       onFocus(true)
                   }}
                   onBlur={() => {
                       onFocus(false)
                   }}
                   className={`${isEmpty ? 'not-empty' : ''}`}
                   id={name.toLocaleUpperCase()}
                   name={name}
                   value={value}
                   onChange={handleChange}/>
            <label ref={element} htmlFor={name.toLocaleUpperCase()}>{title}</label>
            {type === 'password' &&
            <span onClick={showPasswordSwitch} className='show-password'>{showPassword ? 'hide' : 'show'}</span>}
        </div>
    )
};

TextField.propTypes = {
    defaultValue: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};
export default TextField;

function getWitdh(element) {
    return element.current.offsetWidth;
}