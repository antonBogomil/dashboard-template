import React from 'react';
import {Link} from 'react-router-dom'
import getIcons from "../utils/getIcons";
import '../styles/menu.scss'
/*
* Only two level yet!!!
* */
const Menu = ({data}) => {
    return (
        <ul className='menu'>
            {
                data && data.map((item, i) => {

                    console.log(getIcons[item.icon]);
                    return (
                        <li key={i} className='menu-item'>
                            {
                                item.url ?
                                    <Link to={item.url}>
                                        {item.icon && <span>{getIcons(item.icon)}</span>}
                                        {item.title}
                                    </Link> :
                                    <a href>
                                        {item.icon && <span>{getIcons(item.icon)}</span>}
                                        {item.title}
                                    </a>

                            }
                            {item.nested && <ul className='menu-nested'>
                                {
                                    item.nested && item.nested.map((subItem, j) => {
                                        return (
                                            <li key={(data.length + 1) * j}>
                                                <Link to={subItem.url}>
                                                    {subItem.icon && <span>{getIcons(subItem.icon)}</span>}
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            }
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Menu;
