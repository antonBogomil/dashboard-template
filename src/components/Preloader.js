import React from 'react';
import PropTypes from 'prop-types';
import '../styles/preloader.scss';
const Preloader = ({size='normal'}) => {
    return (
        <div className={`lds-roller ${size}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

Preloader.propTypes = {

};

export default Preloader;