import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ICONS, LIST_COLUMN_TYPE} from "../constants";
import '../styles/list.scss';
import getIcons from "../utils/getIcons";
import dateFormat from '../utils/dateFormat';
import {Pagination} from "./Pagination";
import CardBlock from "./CardBlock";

const List = ({items, settings}) => {
    const fields = settings.fields || [];
    const {rowsPerPage, total} = settings;


    const pageAmountDefault = Math.ceil((items.length || total) / rowsPerPage);
    const activePageDefault = 0;
    const activeItemsDefault = items.slice(rowsPerPage * activePageDefault, rowsPerPage);

    const [list, setList] = useState({
        activePage: activePageDefault,
        pages: pageAmountDefault,
        activeItems: activeItemsDefault
    });
    const {activePage, pages, activeItems} = list;


    const changePage = (pageNumber) => {
        let newActivePage = pageNumber;
        if (pageNumber === -1) {
            newActivePage = activePage - 1;
        }
        /*if undefined then next page*/

        if (pageNumber === undefined) {
            newActivePage = activePage + 1;
        }
        const from = newActivePage * rowsPerPage,
            to = from + rowsPerPage;

        const newItems = items.slice(from, to);
        setList((prevState) => {
            return {
                ...prevState,
                activePage: newActivePage,
                activeItems: newItems
            }
        })
    };


    const fieldTitles = fields.map((field, i) => {
        return <th key={i}>{cellViewResolver(field.type, field.title, true)}</th>
    });
    const rows = activeItems.map((item, i) => {
        return (
            <tr key={i}>{fields.map((field, i) => {
                return (<td key={i}>{cellViewResolver(field.type, item[field.name])}</td>)
            })}</tr>
        )
    });
    return (
        <>
            <div className='list'>
                <CardBlock>
                    <CardBlock.Body>
                        <table>
                            <thead>
                            <tr className='list-head'>{fieldTitles}</tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </table>
                    </CardBlock.Body>
                </CardBlock>
                {rowsPerPage && pages > 1 &&
                <div className='list-pagination'>
                    <Pagination
                        pagesNum={pages}
                        active={activePage}
                        onClick={changePage}
                    />
                </div>
                }
            </div>
        </>

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
        rowsPerPage: PropTypes.number,
    }).isRequired,
};


const cellViewResolver = (type, value, isTitle) => {
    switch (type) {
        case LIST_COLUMN_TYPE.BOOLEAN:
            return <span
                className='cell-bool'>{isTitle ? value : (value ? getIcons(ICONS.CHECK) : getIcons(ICONS.CHECK_FALSE))}</span>;
        case LIST_COLUMN_TYPE.DATE:
            return <span className='cell-date'>{isTitle ? value : dateFormat(value)}</span>;
        case LIST_COLUMN_TYPE.NUMBER:
            return <span className='cell-num'>{value}</span>;
        case LIST_COLUMN_TYPE.IMG:
            return <span className='cell-img'>{isTitle ? value : <img src={value} alt='no-img'/>}</span>;
        default:
            return <span className='cell-text'>{value}</span>
    }
};

export default List;