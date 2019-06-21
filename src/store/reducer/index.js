import {combineReducers} from 'redux'
import locale from "./locale";
import user from "./user";

export const rootReducer = combineReducers({
    locale,
    user
});