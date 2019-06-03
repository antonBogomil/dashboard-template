import {MENU_ICONS} from "../constants";
export default [
    {
        title: 'Home',
        url: '/',
        icon: MENU_ICONS.HOME,
    },
    {
        title: 'UI Elements',
        icon: MENU_ICONS.ELEMENTS,
        nested: [
            {
                title: 'Buttons',
                url: '/buttons',
                icon: ''
            },
            {
                title: 'Typography',
                url: '/typography',
                icon: '',
            },
        ],
    },
    {
        title: 'Documentation',
        url: '/docs',
        icon: MENU_ICONS.HOME,
    },

];
