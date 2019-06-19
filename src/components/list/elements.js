import React, {useEffect, useState} from "react";
import {ICONS, LIST_COLUMN_TYPE} from "../../constants";
import getIcons from "../../utils/getIcons";
import dateFormat from "../../utils/dateFormat";
import ImageLoad from "../ImageLoad";

const ListTitles = (props) => {
    const {onSelect,checked} = props;
    const [fields, setFields] = useState(props.fields);
    useEffect(() => {

    }, [fields]);
    return (
        <thead className='list-head'>
        <tr className='list-row'>
            <td className='list-cell list-cell_select' onClick={()=>{onSelect('ALL')}}> {checked ? getIcons(ICONS.CHECK): getIcons(ICONS.CHECK_OUTLINE_FALSE)} </td>
            {
                fields.map((field, i) => {
                    return <th className='list-cell list-cell_head'
                               key={i}>{ListCell(field.type, field.title, true)}</th>
                })
            }
        </tr>
        </thead>
    )
};

const ListBody = ({items, fields, rows,onSelect,selected=[]}) => {
    return (
        <tbody className='list-body'>
        {
            items.map((item, i) => {
                return (
                    <tr className='list-row' key={i}>
                        <td className='list-cell list-cell_select' onClick={()=>{onSelect(item.id)}}> {selected.indexOf(item.id) !==-1 ? getIcons(ICONS.CHECK): getIcons(ICONS.CHECK_OUTLINE_FALSE)} </td>
                        {
                            fields.map((field, i) => {
                                return (<td className='list-cell' key={i}>{ListCell(field.type, item[field.name])}</td>)
                            })
                        }
                    </tr>
                )
            })
        }
        {items.length < rows && emptyRows(rows - items.length, fields)}
        </tbody>
    )
};

const emptyRows = (rows, fields) => {
    const er = [];
    for (let i = 0; i < rows; i++) {
        er.push(<tr className='list-row' key={i}>{fields.map((field, i) => {
            return (<td className='list-cell' key={i}/>)
        })}</tr>);
    }
    return er
};

const ListCell = (type, value, isTitle) => {
    switch (type) {
        case LIST_COLUMN_TYPE.BOOLEAN:
            return <span
                className='cell-bool'>{isTitle ? value : (value ? getIcons(ICONS.CHECK) : getIcons(ICONS.CHECK_FALSE))}</span>;
        case LIST_COLUMN_TYPE.DATE:
            return <span className='cell-date'>{isTitle ? value : dateFormat(value)}</span>;
        case LIST_COLUMN_TYPE.NUMBER:
            return <span className='cell-num'>{value}</span>;
        case LIST_COLUMN_TYPE.IMG:
            return <span key={value} className='cell-img'>{isTitle ? value : <ImageLoad src={value}/>}</span>;
        default:
            return <span className='cell-text'>{value}</span>
    }
};

export {ListTitles, ListBody, ListCell};