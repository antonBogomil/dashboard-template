import React from 'react';
import '../styles/btn.scss';
import PropTypes from "prop-types";
const Button = ({children, onClick, variant = 'primary',href='/'}) => {
    const className = 'btn btn-' + variant;
    if (onClick) {
        return <a className={className} onClick={onClick}>{children}</a>

    } else {
        return <a className={className} href={href}>{children}</a>
    }
};
Button.propTypes = {
    variant: PropTypes.oneOf(['primary','secondary','warning','danger','info','success']),
    onClick: PropTypes.func,
    href: PropTypes.string
};

export default Button;