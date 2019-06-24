import langs from '../../admin/settings/langs';
import {ACTION_TYPES} from "../types";

const initialState = langs[0];
const lang = (state = initialState, action) => {
    if (action.type === ACTION_TYPES.CHANGE_LANG) {
        return {
            id: action.payload
        };
    } else {
        return state
    }
};
export default lang