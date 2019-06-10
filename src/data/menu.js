import {MENU_ICONS} from "../constants";
export default [
    {
        title: 'PAGE_HOME',
        url: '/',
        icon: MENU_ICONS.HOME,
    },
    {
        title: 'PAGE_ITEMS_MANAGE',
        icon: MENU_ICONS.LIST,
        nested: [
            {
                title: 'PAGE_ITEMS_LIST',
                url: '/list',
                icon: ''
            },
            {
                title: 'PAGE_ITEMS_EDIT',
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
