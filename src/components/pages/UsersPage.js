import React from 'react';
import PropTypes from 'prop-types';
import Page from "../WrappedPage";
import {LIST_COLUMN_TYPE} from "../../constants";
import List from "../List";

/*Test ONLY!!!!*/
import users from '../../backendData/users';
import {useFetch} from "../../api/api";
/***************/




const settings = {
    title: 'PAGE_TITLE_USERS',
    dataUrl: '/users',
};
const list = {
    fields: [
        // {name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'img', title: 'Picture', type: LIST_COLUMN_TYPE.IMG},
        {name: 'name', title: 'Name', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Role', type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Active', type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "dateCreated", title: 'Created', type: LIST_COLUMN_TYPE.DATE}
    ],
    rowsPerPage: 5,
    total: 0,
    select: false,
    filter: false,
    editable: true,
    sortBy: 'id',
    sortDir: 'asc',
};


const UsersPage = ({data}) => {

    return (
        <>
            <List items={data} settings={list}/>
        </>
    );
};

export default Page(UsersPage, settings);