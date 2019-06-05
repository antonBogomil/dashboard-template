import React, {useState, useRef} from 'react';
import './collapse.scss'
import getIcons from "../../utils/getIcons";
import {ICONS} from "../../constants";

export const Collapse = ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='collapse-panel'>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {open, setOpen})
            })}
        </div>
    );
};
export const CollapseItem = (props) => {
    const li = useRef();
    const {setOpen, open} = props;
    return (
        <div className='collapse-item'
             onClick={(e) => {
                 handleClick(e, setOpen, open)
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