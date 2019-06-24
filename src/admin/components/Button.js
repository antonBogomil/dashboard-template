import React from 'react';
import '../styles/btn.scss';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Button = ({children, onClick, variant = 'primary', size = 'normal', shape = 'rec', href, to, type}) => {
    const className = 'btn btn-' + variant + ' btn-' + size + ' btn-' + shape;

    if (onClick) {
        return <a className={className} onClick={onClick}>{children}</a>
    } else if (href) {
        return <a className={className} href={href}>{children}</a>
    } else if (to) {
        return (
            <div className={className}>
                <NavLink to={to}>{children}</NavLink>
            </div>
        )
    } else if (type) {
        return <button className={className} type={type}>{children}</button>

    } else {
        return <a className={className}>{children}</a>

    }
};
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'info', 'success', 'disabled']),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    shape: PropTypes.oneOf(['round', 'block', 'rec']),
    onClick: PropTypes.func,
    href: PropTypes.string,

};

export default Button;