import {ICONS, MENU_ICONS} from "../constants";
import {
    MdHome,
    MdWeb,
    MdSearch,
    MdHelp,
    MdArrowDropUp,
    MdArrowDropDown,
    MdArrowBack,
    MdKeyboardArrowDown,
    MdList,
    MdVerifiedUser,
    MdPeople,
    MdLibraryBooks,
    MdSettings,
    MdDvr
} from 'react-icons/md';

export default {
    [MENU_ICONS.HOME]: MdHome,
    [ICONS.ARROW_UP]: MdArrowDropUp,
    [ICONS.ARROW_DOWN]: MdKeyboardArrowDown,
    [ICONS.SEARCH]: MdSearch,
    [MENU_ICONS.LIST]: MdList,
    [MENU_ICONS.USERS]: MdPeople,
    [MENU_ICONS.PAGES]: MdWeb,
    [MENU_ICONS.SETTINGS]: MdSettings,
    [MENU_ICONS.DOC]: MdLibraryBooks,
    [MENU_ICONS.FORMS]: MdDvr
}