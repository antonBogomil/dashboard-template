import React, {useEffect, useState} from "react";
import {ICONS, LIST_COLUMN_TYPE} from "../../constants";
import getIcons from "../../../utils/getIcons";
import dateFormat from "../../../utils/dateFormat";
import ImageLoad from "../ImageLoad";
import FormCheckbox from "../inputs/Checkbox";
import Button from "../Button";
import {ADMIN_PATH} from "../../settings/routes";

const ListTitles = (props) => {
    const {onSelect, checked} = props;
    const [fields] = useState(props.fields);
    useEffect(() => {

    }, [fields]);
    return (
        <thead className='list-head'>
        <tr className='list-row'>
            <td className='list-cell list-cell_select'>
                <FormCheckbox checked={checked}
                              onChange={() => {
                              onSelect('ALL')
                          }}
                />
            </td>
            {
                fields.map((field, i) => {
                    return <th className='list-cell list-cell_head'
                               key={i}>{ListCell(field.type, field.title, true)}</th>
                })
            }
            <td></td>
        </tr>
        </thead>
    )
};

const ListBody = ({items, fields, editPage, rows, onSelect, selected = []}) => {
    return (
        <tbody className='list-body'>
        {
            items.map((item, i) => {
                return (
                    <tr className='list-row' key={i}>
                        <td className='list-cell list-cell_select'>
                            <FormCheckbox checked={selected.indexOf(item.id) !== -1}
                                          onChange={() => {
                                          onSelect(item.id)
                                      }}
                            />
                        </td>
                        {
                            fields.map((field, i) => {
                                return (<td className='list-cell' key={i}>{ListCell(field.type, item[field.name])}</td>)
                            })
                        }
                        {editPage && <td>
                            <Button size='small'
                                    shape={'round'}
                                    variant='secondary'
                                    to={`${ADMIN_PATH+editPage}/${item.id}`}
                            >
                                {getIcons(ICONS.EDIT)}
                            </Button>
                        </td>}
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