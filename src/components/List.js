import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ICONS, LIST_COLUMN_TYPE} from "../constants";
import '../styles/list.scss';
import getIcons from "../utils/getIcons";
import dateFormat from '../utils/dateFormat';
import {Pagination} from "./Pagination";
import CardBlock from "./CardBlock";
import {getData, useFetch} from "../api/api";
import Preloader from "./Preloader";

const List = ({settings, listItems = []}) => {
    const fields = settings.fields;
    const {rowsPerPage, dataUrl, activePage} = settings;
    const [params, setParams] = useState({
        page: activePage,
        total: Math.ceil(listItems.length / rowsPerPage)
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(listItems);


    useEffect(() => {
        if (dataUrl) {
            setLoading(true);
            getData(dataUrl, params, (data) => {
                setItems(data);
                setLoading(false)
            }, (e) => setError(true))
        } else {
            const slicedItems = sliceItems(listItems);
            setItems(slicedItems)
        }
    }, [params.page]);


    const sliceItems = (allItems) => {
        const {page} = params;
        const from = page * rowsPerPage,
            to = from + rowsPerPage;
        return allItems.slice(from, to);
    };


    const changePage = (pageNumber) => {
        let newActivePage = pageNumber;
        if (pageNumber === -1) {
            newActivePage = activePage - 1;
        }
        /*if undefined then next page*/
        if (pageNumber === undefined) {
            newActivePage = activePage + 1;
        }
        setParams((old) => {
            return {
                ...old,
                page: newActivePage,
            }
        })
    };

    const {page, total} = params;
    // console.log(items);
    console.log(loading);
    return (
        <>
            {
                loading ? <Preloader  size='small'/> : (
                    error ? <h2>Error</h2> : <div className='list'>
                        <CardBlock>
                            <CardBlock.Body>
                                <table>
                                    <thead>
                                    <tr className='list-head'>{Titles(fields)}</tr>
                                    </thead>
                                    <tbody>{Rows(items, fields)}</tbody>
                                </table>
                            </CardBlock.Body>
                        </CardBlock>
                        {total > 1 &&
                        <div className='list-pagination'>
                            <Pagination
                                pagesNum={total}
                                active={activePage}
                                onClick={changePage}
                            />
                        </div>
                        }
                    </div>
                )
            }
        </>

    );
};
List.propTypes = {
    items: PropTypes.array,
    settings: PropTypes.shape({
        fields: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.oneOf(Object.values(LIST_COLUMN_TYPE))
        })).isRequired,
        rowsPerPage: PropTypes.number,
    }).isRequired,
};


const Titles = (fields) => fields.map((field, i) => {
    return <th key={i}>{cellViewResolver(field.type, field.title, true)}</th>
});
const Rows = (items, fields) => items.map((item, i) => {
    return (
        <tr key={i}>{fields.map((field, i) => {
            return (<td key={i}>{cellViewResolver(field.type, item[field.name])}</td>)
        })}</tr>
    )
});


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