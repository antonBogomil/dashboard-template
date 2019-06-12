import React from 'react';
import Page from "./pages/UsersPage";
import PropTypes from 'prop-types';
import {ICONS, LIST_COLUMN_TYPE} from "../constants";
import '../styles/list.scss';
import getIcons from "../utils/getIcons";

// const list = {
//     fields: [{name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
//         {name: 'img', title: 'Picture', type: LIST_COLUMN_TYPE.IMG},
//         {name: 'name', title: 'Name', type: LIST_COLUMN_TYPE.STRING},
//         {name: "role", title: 'Role', type: LIST_COLUMN_TYPE.STRING},
//         {name: "active", title: 'Active', type: LIST_COLUMN_TYPE.BOOLEAN},
//         {name: "dateCreated", title: 'Created', type: LIST_COLUMN_TYPE.DATE}]
// };


const List = ({items, settings}) => {
    const fields = settings.fields || [];
    const fieldTitles = [];
    fields.forEach((field) => {
        fieldTitles.push(<th key={field.title}>{cellViewResolver(field.type,field.title)}</th>)
    });
    const rows = items.map((item) => {
        return (
            <tr>
                {
                    fields.map((field)=>{
                       return(
                           <td>{cellViewResolver(field.type,item[field.name])}</td>
                       )
                    })
                }
            </tr>
        )
    });
    return (
        <div className='list'>

            <table>
                <thead>
                <tr className='list-head'>
                    {fieldTitles}
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
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



const cellViewResolver = (type,value) =>{
    switch (type) {
        case LIST_COLUMN_TYPE.BOOLEAN: return <span className='cell-bool'>{ typeof value ==='boolean' ? (value ? getIcons(ICONS.CHECK): getIcons(ICONS.CHECK_FALSE)): value}</span>
        case LIST_COLUMN_TYPE.DATE: return <span className='cell-date'>{value}</span>;
        case LIST_COLUMN_TYPE.NUMBER: return <span className='cell-num'>{value}</span>;
        case LIST_COLUMN_TYPE.IMG: return <span className='cell-img'><img src={value} alt='no-img'/></span>;
        default: return <span className='cell-text'>{value}</span>
    };
};

export default List;