import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/select.scss'
const Select = ({title,defaultValue,options}) => {
    const [select,setSelect]  = useState(null);
    return (
        <div className="select">
            <div className='select-title'>{title}</div>
            <div className='select-options'>
                {}
            </div>
        </div>
    );
};

Select.propTypes = {

};

export default Select;
