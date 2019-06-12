import React from 'react';
import Page from "./pages/UsersPage";
import PropTypes from 'prop-types';
import {LIST_COLUMN_TYPE} from "../constants";

const list = {
    fields: [{name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'img', title: 'Picture', type: LIST_COLUMN_TYPE.IMG},
        {name: 'name', title: 'Name', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Role', type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Active', type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "dateCreated", title: 'Created', type: LIST_COLUMN_TYPE.DATE}]
};


const List = ({items, settings= list}) => {
    const fieldTitles = settings.fields.map((field)=>{
        return <td>{field.title}</td>
    }) ;
    return (
        <div className='list'>
            <table>
                <tr className='list-head'>
                    {fieldTitles}
                </tr>
                <div className='items'>

                    <ul className='items-list'>
                        {items.map((item, i) => {
                            return (
                                <ListItem key={i}>
                                    <div className='item-row'></div>
                                </ListItem>
                            )
                        })}
                    </ul>
                </div>
            </table>
        </div>
    );
};
List.propTypes = {
    items: PropTypes.array.isRequired,
    settings: PropTypes.shape({
        fields: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.oneOf(Object.values(LIST_COLUMN_TYPE))
        })).isRequired,
    }).isRequired
};

const ListItem = ({children}) => {
    return (
        <li className='item'>
            {children}
        </li>
    )
};
export default List;