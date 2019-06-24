import {FORM_FIELD_TYPES} from "../constants/const";


export const userAdd = {
    title: 'User form here:',
    fields: [
        {
            id: 1,
            name: 'username',
            type: FORM_FIELD_TYPES.TEXT,
            required: true,
            label: 'Name'
        },
        {
            id: 2,
            name: 'email',
            type: FORM_FIELD_TYPES.EMAIL,
            required: true,
            label: 'Email'
        },
        {
            id: 3,
            name: 'password',
            type: FORM_FIELD_TYPES.PASSWORD,
            placeholder: '',
            required: true,
            label: 'Password'
        },
        {
            id: 4,
            name: 'roles',
            type: FORM_FIELD_TYPES.CHECKBOX,
            placeholder: '',
            required: true,
            label: 'Password'
        }
    ],
    buttons: [
        {
            id: 1,
            name: 'Register',
            type: 'submit',
        },
        {
            id: 2,
            name: 'Clean',
            type: 'reset'
        },
    ]
};

// fields: [
//     {
//         id: 1,
//         name: 'username',
//         type: FORM_FIELD_TYPES.TEXT,
//         required: true,
//         label: 'Name'
//     },
//     {
//         id: 2,
//         name: 'email',
//         type: FORM_FIELD_TYPES.EMAIL,
//         required: true,
//         label: 'Email'
//     }
// ]