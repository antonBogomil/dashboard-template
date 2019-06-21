import langs from '../../settings/langs';
import {ACTION_TYPES} from "../types";

const initialState = langs[0];
const locale = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.CHANGE_LANG:
            return {
                id: action.payload
            };
        default:
            return state
    }
};
export default locale