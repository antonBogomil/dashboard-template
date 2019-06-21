import {ACTION_TYPES} from "../types";

const user = (state = null, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                id: action.id
            };
        default:
            return state
    }
};
export default user