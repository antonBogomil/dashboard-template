export const LIST_ACTIONS = {
    LIST_INITIALIZED: "INITED",
    PAGE_CHANGE: "CHANGE",
    PAGE_LOADING: "LOADING",
    PAGE_LOADED: "LOADED",
    DATA_ERROR: "ERROR",
    SELECT : "SELECT"
};


export default function listReducer(state, action) {
    switch (action.type) {
        case LIST_ACTIONS.PAGE_LOADING:
            return {
                ...state,
            };
        case LIST_ACTIONS.PAGE_LOADED:
            return {
                ...state,
                error: false,
                total: action.data.total,
                items: action.data.items,
                initialized: true,
            };
        case LIST_ACTIONS.DATA_ERROR:
            return {
                ...state,
                error: true,
                items: action.data
            };
        case LIST_ACTIONS.PAGE_CHANGE:
            return {
                ...state,
                page: action.page,
            };
        case LIST_ACTIONS.SELECT:
            return {
                ...state,
                selected: action.selected,
            };
        default:
            return state
    }
}