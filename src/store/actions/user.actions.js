import {ACTION_TYPES} from "../types";
import {userService} from "../../admin/_service/userService";
import store from '../../store';
export const userActions = {
    login, logout
};


function login(username, password) {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGIN,
        payload: {
            username, password
        }
    });
    userService.login(username,password);
    window.location = '/admin';
}

function logout() {
    store.dispatch({
        type: ACTION_TYPES.USER_LOGIN,
        payload: null
    });
    userService.logout();
    window.location = '/';
}
