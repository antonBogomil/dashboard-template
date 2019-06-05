import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import './collapse.scss'
import getIcons from "../../utils/getIcons";
import {ICONS} from "../../constants";

export const Collapse = ({children,onChange,defaultOpen=false}) => {
    const [open, setOpen] = useState(defaultOpen);
    console.log(open);

    return (
        <div className={`collapse-panel ${open ? 'open': ''}`}>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {open, setOpen,onChange})
            })}
        </div>
    );
};

Collapse.propTypes = {
    children: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};


export const CollapseItem = (props) => {
    const li = useRef();
    const {setOpen, open,onChange} = props;
    return (
        <div className='collapse-item'
             onClick={(e) => {
                 onChange && onChange({open: open});
                 handleClick(e, setOpen, open);
             }}
        >
            {props.children}
            <span className={`expand-arrow ${open ? 'open': ''}`}>{getIcons(ICONS.ARROW_DOWN)}</span>
        </div>
    )
};
export const CollapseContent = ({children}) => {
    return (
        <div className='collapse-content'>
            {children}
        </div>
    )
};


function handleClick(e, handler) {
    e.stopPropagation();
    animateCollapse(e.currentTarget);
    handler((open) => !open);
}

function animateCollapse(targetElement) {
    let parentContainer = targetElement.parentElement;
    let content = parentContainer.querySelector('.collapse-content');
    let isOpen = parentContainer.classList.contains('open');
    if (isOpen) {
        parentContainer.classList.remove('open');
        content.style.maxHeight = null;
    } else {
        const contentH = parentContainer.querySelector('.collapse-content').scrollHeight;
        content.style.maxHeight = contentH + 'px';
        parentContainer.classList.add('open');
    }
}