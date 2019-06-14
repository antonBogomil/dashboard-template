import React, {useState, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom'
import getIcons from "../utils/getIcons";
import '../styles/menu.scss'
import {ICONS} from "../constants/const";
import {Collapse, CollapseContent, CollapseItem} from "../library/collapse/Collapse";
import {useTranslation} from "react-i18next";
/*
* Only two level yet!!!
* */
const Menu = ({data, depth = 0, isOpen,parentUrl=''}) => {
    return (
        <ul className={`menu menu-level-${depth} ${isOpen ? 'open' : ''}`}>
            {
                data && data.map((item, i) => {
                    return (
                        <MenuItem item={item} parentUrl={parentUrl} key={item.id || i} depth={depth}/>
                    )
                })
            }
        </ul>
    );
};
const MenuItem = ({item, depth, history,parentUrl}) => {
    const [open, setOpen] = useState(false);
    const openClass = open && item.nested ? 'open' : '';
    const li = useRef();
    const [t] = useTranslation();
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
                <Collapse defaultOpen={item.open}>
                    <CollapseItem>
                        <a>
                            {item.icon && <span className='icon'>{getIcons(item.icon)}</span>}
                            {t(item.title)}
                        </a>
                    </CollapseItem>
                    <CollapseContent>
                        <Menu data={Object.values(item.nested)} parentUrl={item.url} depth={depth + 1} isOpen={open}/>
                    </CollapseContent>
                </Collapse> :
                <NavLink to={parentUrl+item.url} exact activeClassName='active'>
                    {item.icon && <span className='icon'>{getIcons(item.icon)}</span>}
                    {t(item.title)}
                </NavLink>
            }
        </li>
    )
};

export default Menu;
