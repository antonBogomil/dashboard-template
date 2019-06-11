/*This is example*/

import {LIST_COLUMN_TYPE} from "../constants";

export const configUsers = {
    fields: [
        {name: 'id', title: '#',type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'img', title: 'Picture',type: LIST_COLUMN_TYPE.IMG},
        {name: 'name',title: 'Name', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Role',type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Active',type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "dateCreated", title: 'Created',type: LIST_COLUMN_TYPE.DATE}
    ],
    dataUrl: '/users',
}