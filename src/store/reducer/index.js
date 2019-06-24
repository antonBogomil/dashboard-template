import {combineReducers} from 'redux'
import langReducer from "./lang.reducer";
import userReducer from "./user.reducer";

export const rootReducer = combineReducers({
    lang:langReducer,
    user: userReducer
});