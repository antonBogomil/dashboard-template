import React, {useState, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {ICONS, LIST_COLUMN_TYPE} from "../../constants";
import '../../styles/list.scss';
import {Pagination} from "../Pagination";
import CardBlock from "../CardBlock";
import {getData} from "../../api";
import Preloader from "../Preloader";
import {getTotalPages, sliceItems} from "./utils";
import listReducer, {LIST_ACTIONS} from "./reducer";
import {ListTitles, ListBody} from "./elements";



const List = ({settings}) => {
    const {fields} = settings;
    const initialState = {
        page: 0,
        rows: settings.rows,
        total: 0,
        items: [],
        loading: true,
        error: false,
        initialized: false,
    };
    const [state, dispatch] = useReducer(listReducer, initialState);
    const {page, initialized, error, items, rows, total} = state;
    useEffect(() => {

        try {
            getData(settings.dataUrl, {}, settings.paging ? setPageWithPaging : setPage,
                (e) => {
                    dispatch({type: LIST_ACTIONS.DATA_ERROR});
                })
        } catch (e) {
            dispatch({type: LIST_ACTIONS.DATA_ERROR})
        }

    }, [page]);

    function changePage(pageNumber) {
        dispatch({type: LIST_ACTIONS.PAGE_CHANGE, page: pageNumber})
    }

    function setPageWithPaging(data) {
        dispatch({
            type: LIST_ACTIONS.PAGE_LOADED, data: {
                items: data.items,
                total: data.total
            },
        });
    }

    function setPage(data) {
        dispatch({
            type: LIST_ACTIONS.PAGE_LOADED, data: {
                items: data,
                total: getTotalPages(data.length, rows)
            },
        });
    }
    return (
        <>
            {
                initialized ?
                    <>
                        {error ? <p className='text-danger'>404 ERROR</p> :
                            <CardBlock>
                                <CardBlock.Body>
                                    <table className='list'>
                                        <ListTitles fields={fields}/>
                                        <ListBody fields={fields} items={sliceItems(page, rows, items)} rows={rows}/>
                                    </table>
                                </CardBlock.Body>
                            </CardBlock>}
                        {total > 1 &&
                        <div className='pagination'>
                            <Pagination
                                pagesNum={total}
                                activePage={page}
                                onClick={changePage}
                            />
                        </div>}
                    </> : <Preloader/>
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
export default List;


