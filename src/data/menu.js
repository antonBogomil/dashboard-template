import {MENU_ICONS} from "../constants";
export default [
    {
        title: 'Home',
        url: '/',
        icon: MENU_ICONS.HOME,
    },
    {
        title: 'List manager',
        icon: MENU_ICONS.LIST,
        nested: [
            {
                title: 'List',
                url: '/list',
                icon: ''
            },
            {
                title: 'Edit',
                url: '/edit',
                icon: '',
            },
        ],
    },
    {
        title: 'UI Elements',
        icon: MENU_ICONS.ELEMENTS,
        open: true,
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
