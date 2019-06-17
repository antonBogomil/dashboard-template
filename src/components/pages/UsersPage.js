import React from 'react';
// import PropTypes from 'prop-types';
import WrappedPage from "../WrappedPage";
import {LIST_COLUMN_TYPE} from "../../constants";
import List from "../List";




const settings = {
    title: 'PAGE_TITLE_USERS',
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
    select: false,
    filter: false,
    editable: true,
    sortBy: 'id',
    sortDir: 'asc',
    dataUrl: '/users',
    lazy: true,
    rowsPerPage: 5,
    activePage: 0
};


const UsersPage = ({data}) => {
    return (
        <>
            <List settings={list} listItems={data || []}/>
        </>
    );
};

export default WrappedPage(UsersPage, settings);