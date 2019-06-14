import {MENU_ICONS} from "../constants";

export default [
    {
        title: 'MENU_HOME',
        url: '/',
        icon: MENU_ICONS.HOME,
    },
    {
        title: 'MENU_USERS',
        icon: MENU_ICONS.USERS,
        url: '/users',
        nested: [
            {
                title: 'MENU_USERS_LIST',
                url: '/list',
                icon: ''
            },
            {
                title: 'MENU_USERS_ADD',
                url: '/add',
                icon: '',
            },
        ],
    },
    {
        title: 'MENU_PAGES',
        icon: MENU_ICONS.PAGES,
        url: '/pages',
    },
    {
        title: 'MENU_FORMS',
        icon: MENU_ICONS.FORMS,
        url: '/forms',
    },
    {
        title: 'MENU_SETTINGS',
        icon: MENU_ICONS.SETTINGS,
        url: '/settings',
    },
    {
        title: 'MENU_UI_DEMO',
        icon: MENU_ICONS.ELEMENTS,
        url: '/ui',
        nested: [{
            title: 'MENU_UI_DEMO_BTN',
            url: '/buttons',
            icon: ''
        },
            {
                title: 'MENU_FORMS',
                url: '/forms',
                icon: ''
            }
        ]
    },
    {
        title: 'MENU_DOC',
        url: '/docs',
        icon: MENU_ICONS.DOC,
    },


];
