import React, {useState, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom'
import getIcons from "../utils/getIcons";
import '../styles/menu.scss'
import {ICONS} from "../constants/const";
import {Collapse, CollapseContent, CollapseItem} from "../library/collapse/Collapse";
/*
* Only two level yet!!!
* */
const Menu = ({data, depth = 0, isOpen}) => {
    return (
        <ul className={`menu menu-level-${depth} ${isOpen ? 'open' : ''}`}>
            {
                data && data.map((item, i) => {
                    return (
                        <MenuItem item={item} key={item.id || i} depth={depth}/>
                    )
                })
            }
        </ul>
    );
};
const MenuItem = ({item, depth, history}) => {
    const [open, setOpen] = useState(false);
    const openClass = open && item.nested ? 'open' : '';
    const li = useRef();

    function openSupMenu(e) {
        e.stopPropagation();
        if (e.currentTarget === li.current) {
            setOpen((open) => {
                return !open
            })
        }
    }

    return (

        <li className={`menu-item ${openClass}`}>
            {item.nested ?
                <Collapse defaultOpen={true}>
                    <CollapseItem>
                        <a>
                            {item.icon && <span className='icon'>{getIcons(item.icon)}</span>}
                            {item.title}
                        </a>
                    </CollapseItem>
                    <CollapseContent>
                        <Menu data={item.nested} depth={depth + 1} isOpen={open}/>
                    </CollapseContent>
                </Collapse> :
                <NavLink to={item.url} exact activeClassName='active'>
                    {item.icon && <span className='icon'>{getIcons(item.icon)}</span>}
                    {item.title}
                </NavLink>
            }
        </li>
    )
};

export default Menu;
