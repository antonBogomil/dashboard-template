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
    MdDvr,
    MdDesktopMac,
    MdCheckBox,
    MdIndeterminateCheckBox,
    MdKeyboardArrowLeft,
    MdCheckBoxOutlineBlank,


} from 'react-icons/md';

export default {
    [ICONS.ARROW_UP]: MdArrowDropUp,
    [ICONS.ARROW_DOWN]: MdKeyboardArrowDown,
    [ICONS.SEARCH]: MdSearch,
    [ICONS.CHECK]: MdCheckBox,
    [ICONS.CHECK_FALSE]: MdIndeterminateCheckBox,
    [ICONS.LEFT]: MdKeyboardArrowLeft,
    [ICONS.CHECK_OUTLINE_FALSE]: MdCheckBoxOutlineBlank,
    [MENU_ICONS.HOME]: MdHome,
    [MENU_ICONS.LIST]: MdList,
    [MENU_ICONS.USERS]: MdPeople,
    [MENU_ICONS.PAGES]: MdWeb,
    [MENU_ICONS.SETTINGS]: MdSettings,
    [MENU_ICONS.DOC]: MdLibraryBooks,
    [MENU_ICONS.FORMS]: MdDvr,
    [MENU_ICONS.ELEMENTS]: MdDesktopMac,

}